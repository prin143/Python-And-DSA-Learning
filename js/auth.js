// ============================================================
// PyLearn Pro — Auth + Progress State Management (auth.js)
// ============================================================

// Global app state
window.AppState = {
  user:        null,
  profile:     null,
  topicProgress: {},   // { topicId: {is_unlocked, is_completed, questions_correct, ...} }
  initialized: false,
};

// ============================================================
// INIT — Call on every protected page
// ============================================================

async function initApp(redirectIfLoggedOut = true) {
  const user = await authGetUser();

  if (!user) {
    if (redirectIfLoggedOut) window.location.href = 'index.html';
    return false;
  }

  AppState.user = user;

  // Load profile
  let { data: profile } = await dbGetProfile(user.id);

  // ✅ FIX: If profile missing (trigger didn't run), create it now
  if (!profile) {
    const meta = user.user_metadata || {};
    const username = meta.username ||
      (user.email || '').split('@')[0].replace(/[^a-zA-Z0-9_]/g, '') ||
      'student';
    await supabaseClient.from('profiles').insert({
      id: user.id,
      email: user.email || '',
      username
    }).select().single();
    const { data: newProfile } = await dbGetProfile(user.id);
    profile = newProfile;
  }
  AppState.profile = profile;

  // Load all topic progress
  const { data: progressRows } = await dbGetAllTopicProgress(user.id);
  if (progressRows) {
    AppState.topicProgress = {};
    for (const row of progressRows) {
      AppState.topicProgress[row.topic_id] = row;
    }
  }

  // ✅ FIX: If py_basics not in progress, unlock it (trigger may have missed)
  if (!AppState.topicProgress['py_basics']) {
    await supabaseClient.from('topic_progress').upsert({
      user_id: user.id,
      topic_id: 'py_basics',
      topic_type: 'python',
      is_unlocked: true
    }, { onConflict: 'user_id,topic_id' });
    AppState.topicProgress['py_basics'] = {
      topic_id: 'py_basics',
      topic_type: 'python',
      is_unlocked: true,
      is_completed: false,
      questions_correct: 0
    };
  }

  // ✅ FIX: Update streak for today if not already done
  if (user.id) {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = profile?.last_activity_date;
    if (lastDate !== today) {
      // Mark today as active (will be fully updated on test completion)
      dbUpdateDailyActivity(user.id, 0, 0, 'login', 0).catch(() => {});
    }
  }

  // Cache to localStorage for offline fallback
  localStorage.setItem('pylearn_profile', JSON.stringify(profile));
  localStorage.setItem('pylearn_progress', JSON.stringify(AppState.topicProgress));

  AppState.initialized = true;
  return true;
}

// ============================================================
// HELPERS — Protect pages
// ============================================================

async function requireAuth() {
  const ok = await initApp(true);
  return ok;
}

// Use cached profile while waiting for DB
function getCachedProfile() {
  try {
    return JSON.parse(localStorage.getItem('pylearn_profile') || 'null');
  } catch { return null; }
}

function getCachedProgress() {
  try {
    return JSON.parse(localStorage.getItem('pylearn_progress') || '{}');
  } catch { return {}; }
}

// ============================================================
// TOPIC UNLOCK LOGIC
// ============================================================

function isTopicUnlocked(topicId, topicType) {
  // ✅ FIX: py_basics is ALWAYS unlocked — it's the starting point
  if (topicId === 'py_basics') return true;

  const prog = AppState.topicProgress[topicId];
  if (prog?.is_unlocked) return true;

  // DSA unlock conditions
  if (topicType === 'dsa') {
    const profile = AppState.profile;
    if (!profile?.python_completed) return false;
    if ((profile?.total_questions_solved || 0) < APP_CONFIG.DSA_UNLOCK_MIN_QUESTIONS) return false;
    return true;
  }

  // Backend unlock conditions
  if (topicType === 'backend' || topicType === 'sql') {
    return AppState.profile?.backend_unlocked || false;
  }

  return false;
}

function isTopicCompleted(topicId) {
  return AppState.topicProgress[topicId]?.is_completed || false;
}

function getTopicScore(topicId) {
  return AppState.topicProgress[topicId]?.best_score_percentage || 0;
}

function getTopicQuestionsCorrect(topicId) {
  return AppState.topicProgress[topicId]?.questions_correct || 0;
}

// ============================================================
// AFTER TEST COMPLETION — Unlock next topic
// ============================================================

async function handleTestCompletion(topicId, topicType, correctCount, totalCount, questionsData) {
  const score = Math.round((correctCount / totalCount) * 100);
  const passed = score >= APP_CONFIG.PASS_PERCENTAGE;

  const userId = AppState.user.id;
  const timeTaken = window._testTimeTaken || 0;

  // Save test session
  await dbSaveTestSession(userId, topicId, topicType, totalCount, correctCount, score, passed, timeTaken, questionsData);

  if (passed) {
    // Mark topic as completed
    await dbCompleteTopic(userId, topicId, topicType, score);

    // Update progress object
    if (!AppState.topicProgress[topicId]) AppState.topicProgress[topicId] = {};
    AppState.topicProgress[topicId].is_completed = true;
    AppState.topicProgress[topicId].best_score_percentage = score;

    // Unlock next topic in sequence
    const nextTopicId = getNextTopicId(topicId, topicType);
    if (nextTopicId) {
      await dbUnlockTopic(userId, nextTopicId, topicType);
      if (!AppState.topicProgress[nextTopicId]) AppState.topicProgress[nextTopicId] = {};
      AppState.topicProgress[nextTopicId].is_unlocked = true;
    }

    // Update profile stats
    await dbUpdateTotalStats(userId, correctCount, totalCount);
    await dbUpdateDailyActivity(userId, totalCount, correctCount, topicId,
      correctCount * APP_CONFIG.XP_PER_CORRECT + APP_CONFIG.XP_POINTS_PER_TOPIC || 0);

    // Check if all Python topics done → mark python_completed
    if (topicType === 'python') await checkPythonComplete(userId);

    // Refresh profile
    const { data: newProfile } = await dbGetProfile(userId);
    AppState.profile = newProfile;
    localStorage.setItem('pylearn_profile', JSON.stringify(newProfile));
    localStorage.setItem('pylearn_progress', JSON.stringify(AppState.topicProgress));
  }

  return { score, passed };
}

async function checkPythonComplete(userId) {
  const { PYTHON_TOPICS } = await import('./curriculum.js').catch(() => ({ PYTHON_TOPICS: [] }));
  // Fallback: check all 'py_' prefixed topics in progress
  const allDone = Object.keys(AppState.topicProgress)
    .filter(k => k.startsWith('py_'))
    .every(k => AppState.topicProgress[k]?.is_completed);

  if (allDone) {
    await dbUpdateProfile(userId, { python_completed: true });
    AppState.profile = { ...AppState.profile, python_completed: true };
  }
}

function getNextTopicId(currentId, topicType) {
  let list;
  if (topicType === 'python')  list = window.PYTHON_TOPICS  || [];
  else if (topicType === 'dsa') list = window.DSA_TOPICS    || [];
  else return null;

  const idx = list.findIndex(t => t.id === currentId);
  if (idx >= 0 && idx < list.length - 1) return list[idx + 1].id;
  return null;
}

// ============================================================
// STREAK HELPERS
// ============================================================

function getStreakText(streak) {
  if (!streak || streak === 0) return '0 day streak';
  if (streak === 1) return '1 day streak 🔥';
  if (streak < 7)  return `${streak} day streak 🔥`;
  if (streak < 30) return `${streak} day streak 🔥🔥`;
  return `${streak} day streak 🔥🔥🔥`;
}

function getLevelFromXP(xp) {
  if (xp < 500)   return 1;
  if (xp < 1500)  return 2;
  if (xp < 3000)  return 3;
  if (xp < 6000)  return 4;
  if (xp < 10000) return 5;
  if (xp < 20000) return 6;
  return Math.floor(xp / 5000) + 1;
}

function getXPForNextLevel(xp) {
  const thresholds = [500, 1500, 3000, 6000, 10000, 20000];
  for (const t of thresholds) {
    if (xp < t) return { current: xp, next: t, pct: Math.round((xp / t) * 100) };
  }
  const lvl = Math.floor(xp / 5000) + 1;
  const next = lvl * 5000;
  return { current: xp, next, pct: Math.round(((xp % 5000) / 5000) * 100) };
}
