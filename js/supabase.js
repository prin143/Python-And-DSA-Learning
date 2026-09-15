// ============================================================
// PyLearn Pro — Supabase Client & Database Operations
// ============================================================

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// PROFILE OPERATIONS
// ============================================================

async function dbGetProfile(userId) {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
}

async function dbUpdateProfile(userId, updates) {
  const { data, error } = await supabaseClient
    .from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();
  return { data, error };
}

// ============================================================
// TOPIC PROGRESS OPERATIONS
// ============================================================

async function dbGetAllTopicProgress(userId) {
  const { data, error } = await supabaseClient
    .from('topic_progress')
    .select('*')
    .eq('user_id', userId);
  return { data, error };
}

async function dbGetTopicProgress(userId, topicId) {
  const { data, error } = await supabaseClient
    .from('topic_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('topic_id', topicId)
    .single();
  return { data, error };
}

async function dbUpsertTopicProgress(userId, topicId, topicType, updates) {
  const { data, error } = await supabaseClient
    .from('topic_progress')
    .upsert({
      user_id: userId,
      topic_id: topicId,
      topic_type: topicType,
      ...updates,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,topic_id' })
    .select()
    .single();
  return { data, error };
}

async function dbUnlockTopic(userId, topicId, topicType) {
  return await dbUpsertTopicProgress(userId, topicId, topicType, {
    is_unlocked: true
  });
}

async function dbCompleteTopic(userId, topicId, topicType, scorePercentage) {
  return await dbUpsertTopicProgress(userId, topicId, topicType, {
    is_completed: true,
    best_score_percentage: scorePercentage,
    completed_at: new Date().toISOString()
  });
}

// ============================================================
// QUESTION ATTEMPT OPERATIONS
// ============================================================

async function dbLogAttempt(userId, questionId, topicId, topicType, isCorrect, selectedAnswer, correctAnswer, timeTaken) {
  const { data, error } = await supabaseClient
    .from('question_attempts')
    .insert({
      user_id: userId,
      question_id: questionId,
      topic_id: topicId,
      topic_type: topicType,
      is_correct: isCorrect,
      selected_answer: String(selectedAnswer),
      correct_answer: String(correctAnswer),
      time_taken_seconds: timeTaken || 0
    });
  return { data, error };
}

async function dbGetAttemptedQuestions(userId, topicId) {
  const { data, error } = await supabaseClient
    .from('question_attempts')
    .select('question_id, is_correct')
    .eq('user_id', userId)
    .eq('topic_id', topicId);
  return { data, error };
}

// ============================================================
// TEST SESSION OPERATIONS
// ============================================================

async function dbSaveTestSession(userId, topicId, topicType, totalQ, correctQ, score, passed, timeTaken, questionsData) {
  const { data, error } = await supabaseClient
    .from('test_sessions')
    .insert({
      user_id: userId,
      topic_id: topicId,
      topic_type: topicType,
      total_questions: totalQ,
      correct_answers: correctQ,
      score_percentage: score,
      passed: passed,
      time_taken_seconds: timeTaken,
      questions_data: questionsData
    })
    .select()
    .single();
  return { data, error };
}

async function dbGetTestHistory(userId, topicId) {
  const { data, error } = await supabaseClient
    .from('test_sessions')
    .select('*')
    .eq('user_id', userId)
    .eq('topic_id', topicId)
    .order('completed_at', { ascending: false })
    .limit(10);
  return { data, error };
}

// ============================================================
// DAILY ACTIVITY & STREAK
// ============================================================

async function dbUpdateDailyActivity(userId, questionsCount, correctCount, topicId, xpEarned) {
  const today = new Date().toISOString().split('T')[0];

  // Check if today's record exists
  const { data: existing } = await supabaseClient
    .from('daily_activity')
    .select('*')
    .eq('user_id', userId)
    .eq('activity_date', today)
    .single();

  if (existing) {
    const updatedTopics = [...new Set([...(existing.topics_studied || []), topicId])];
    await supabaseClient
      .from('daily_activity')
      .update({
        questions_solved: existing.questions_solved + questionsCount,
        correct_answers:  existing.correct_answers  + correctCount,
        topics_studied:   updatedTopics,
        xp_earned:        existing.xp_earned + xpEarned,
        updated_at:       new Date().toISOString()
      })
      .eq('id', existing.id);
  } else {
    await supabaseClient
      .from('daily_activity')
      .insert({
        user_id:          userId,
        activity_date:    today,
        questions_solved: questionsCount,
        correct_answers:  correctCount,
        topics_studied:   [topicId],
        xp_earned:        xpEarned
      });
  }

  // Update streak in profiles
  await updateStreakDB(userId, today);
}

async function updateStreakDB(userId, today) {
  const { data: profile } = await supabaseClient
    .from('profiles')
    .select('current_streak, longest_streak, last_activity_date')
    .eq('id', userId)
    .single();

  if (!profile) return;

  const lastDate = profile.last_activity_date;
  let streak = profile.current_streak || 0;

  if (!lastDate) {
    streak = 1;
  } else {
    const diff = Math.floor((new Date(today) - new Date(lastDate)) / 86400000);
    if (diff === 1) streak += 1;
    else if (diff > 1) streak = 1;
    // diff === 0 → same day, no change
  }

  await supabaseClient
    .from('profiles')
    .update({
      current_streak:     streak,
      longest_streak:     Math.max(profile.longest_streak || 0, streak),
      last_activity_date: today,
      updated_at:         new Date().toISOString()
    })
    .eq('id', userId);
}

async function dbGetDailyActivity(userId, days = 30) {
  const since = new Date(Date.now() - days * 86400000).toISOString().split('T')[0];
  const { data, error } = await supabaseClient
    .from('daily_activity')
    .select('*')
    .eq('user_id', userId)
    .gte('activity_date', since)
    .order('activity_date', { ascending: true });
  return { data, error };
}

// ============================================================
// AGGREGATE STATS
// ============================================================

async function dbUpdateTotalStats(userId, newCorrect, newSolved) {
  const { data: profile } = await supabaseClient
    .from('profiles')
    .select('total_questions_solved, total_correct, xp_points')
    .eq('id', userId)
    .single();

  if (!profile) return;

  const xpGain = newCorrect * APP_CONFIG.XP_PER_CORRECT;

  await supabaseClient
    .from('profiles')
    .update({
      total_questions_solved: profile.total_questions_solved + newSolved,
      total_correct:          profile.total_correct + newCorrect,
      xp_points:              profile.xp_points + xpGain,
      updated_at:             new Date().toISOString()
    })
    .eq('id', userId);
}

// ============================================================
// AUTH HELPERS (for index.html)
// ============================================================

async function authLogin(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function authRegister(email, password, username) {
  const { data, error } = await supabaseClient.auth.signUp({
    email, password,
    options: { data: { username } }
  });

  // If signup succeeded AND session is immediately available
  // (email confirm is OFF), manually ensure profile exists
  // because the DB trigger may take a moment
  if (!error && data?.user) {
    await ensureProfile(data.user.id, email, username);
  }

  return { data, error };
}

// Manually create profile + unlock py_basics if trigger hasn't run yet
async function ensureProfile(userId, email, username) {
  try {
    // Check if profile already exists
    const { data: existing } = await supabaseClient
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .maybeSingle();

    if (!existing) {
      // Profile not created by trigger yet — create it manually
      await supabaseClient.from('profiles').insert({
        id: userId,
        email: email,
        username: username || email.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '') || 'user'
      });

      // Also unlock first topic
      await supabaseClient.from('topic_progress').insert({
        user_id: userId,
        topic_id: 'py_basics',
        topic_type: 'python',
        is_unlocked: true
      });
    }
  } catch (e) {
    // Ignore — trigger may have already created it
    console.warn('ensureProfile:', e.message);
  }
}

async function authForgotPassword(email) {
  const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '/index.html'
  });
  return { data, error };
}

async function authLogout() {
  await supabaseClient.auth.signOut();
  localStorage.clear();
  window.location.href = 'index.html';
}

async function authGetUser() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  return session?.user || null;
}
