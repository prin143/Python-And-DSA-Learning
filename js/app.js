// ============================================================
// PyLearn Pro — Progress Tracking & App Logic
// ============================================================

// ============================================================
// TOAST NOTIFICATION SYSTEM
// ============================================================
window.showToast = function(type, title, msg, duration = 4500) {
  const icons = { success:'✅', error:'❌', info:'ℹ️', warning:'⚠️' };
  const container = document.getElementById('toast-container');
  if (!container) return;

  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `
    <span class="toast-icon">${icons[type]||'ℹ️'}</span>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      ${msg ? `<div class="toast-msg">${msg}</div>` : ''}
    </div>
    <button class="toast-close" onclick="this.closest('.toast').classList.add('removing'); setTimeout(()=>this.closest('.toast').remove(),350)">×</button>
  `;
  container.appendChild(t);
  setTimeout(() => {
    t.classList.add('removing');
    setTimeout(() => t.remove(), 350);
  }, duration);
};

// ============================================================
// CONFETTI CELEBRATION
// ============================================================
window.showConfetti = function(count = 80) {
  const colors = ['#7c3aed','#4f46e5','#06b6d4','#22c55e','#f59e0b','#ef4444','#ec4899'];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.cssText = `
        left: ${Math.random()*100}vw;
        background: ${colors[Math.floor(Math.random()*colors.length)]};
        border-radius: ${Math.random()>0.5?'50%':'2px'};
        width: ${6+Math.random()*8}px;
        height: ${6+Math.random()*8}px;
        animation-duration: ${2+Math.random()*2}s;
        animation-delay: ${Math.random()*0.5}s;
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }, i * 20);
  }
};

// ============================================================
// SIDEBAR RENDERING + PROFILE PIC UPLOAD
// ============================================================
window.renderSidebar = function(activePage = 'dashboard') {
  const profile = AppState.profile || getCachedProfile() || {};
  const username = profile.username || 'Student';
  const streak   = profile.current_streak || 0;
  const xp       = profile.xp_points || 0;
  const level    = getLevelFromXP(xp);
  const initial  = username.charAt(0).toUpperCase();
  const avatarUrl = profile.avatar_url || '';

  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const pythonDone = AppState.profile?.python_completed;
  const dsaUnlocked = isTopicUnlocked('dsa_complexity', 'dsa');
  const totalSolved = profile.total_questions_solved || 0;
  const dsaProgress = Math.min(100, Math.round((totalSolved / 300) * 100));

  sidebar.innerHTML = `
    <!-- Logo -->
    <div class="sidebar-logo">
      <div class="sidebar-logo-icon">🐍</div>
      <div>
        <div class="sidebar-logo-text">PyLearn Pro</div>
        <div style="font-size:10px;color:var(--text-muted);font-weight:600;letter-spacing:.5px;">MASTER PYTHON & DSA</div>
      </div>
    </div>

    <!-- Profile Section -->
    <div class="sidebar-profile">
      <div class="avatar-upload-wrap" onclick="document.getElementById('avatar-file-input').click()" title="Click to change profile picture">
        ${avatarUrl
          ? `<img src="${avatarUrl}" class="sidebar-avatar-img" alt="Profile" />`
          : `<div class="sidebar-avatar">${initial}</div>`
        }
        <div class="avatar-upload-overlay">📷</div>
      </div>
      <input type="file" id="avatar-file-input" accept="image/*" style="display:none" onchange="handleAvatarUpload(event)" />

      <div class="sidebar-profile-info">
        <div class="sidebar-username">${username}</div>
        <div class="sidebar-level">
          <span class="level-badge">Lv ${level}</span>
          <span style="color:var(--text-muted);font-size:11px;">${xp.toLocaleString()} XP</span>
        </div>
        <div style="margin-top:6px;">
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-muted);margin-bottom:3px;">
            <span>XP Progress</span>
            <span>${getXPForNextLevel(xp).pct}%</span>
          </div>
          <div style="height:4px;background:#e9eaf0;border-radius:99px;overflow:hidden;">
            <div style="height:100%;width:${getXPForNextLevel(xp).pct}%;background:var(--gradient-primary);border-radius:99px;transition:.4s ease;"></div>
          </div>
        </div>
      </div>

      <div class="sidebar-streak-badge">🔥 ${streak}</div>
    </div>

    <!-- Stats Pills -->
    <div class="sidebar-stats">
      <div class="sidebar-stat-pill">
        <span style="font-size:16px;">✅</span>
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--text-primary);">${totalSolved}</div>
          <div style="font-size:10px;color:var(--text-muted);">Solved</div>
        </div>
      </div>
      <div class="sidebar-stat-pill">
        <span style="font-size:16px;">📚</span>
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--text-primary);">${Object.values(AppState.topicProgress||{}).filter(t=>t.is_completed).length}</div>
          <div style="font-size:10px;color:var(--text-muted);">Topics</div>
        </div>
      </div>
      <div class="sidebar-stat-pill">
        <span style="font-size:16px;">🔥</span>
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--orange-400);">${streak}</div>
          <div style="font-size:10px;color:var(--text-muted);">Streak</div>
        </div>
      </div>
    </div>

    <nav class="sidebar-nav">
      <div class="sidebar-section-label">Navigation</div>
      <a href="dashboard.html" class="sidebar-item ${activePage==='dashboard'?'active':''}">
        <span class="sidebar-item-icon">🏠</span>
        <span class="sidebar-item-text">Dashboard</span>
      </a>
      <a href="editor.html" class="sidebar-item ${activePage==='editor'?'active':''}">
        <span class="sidebar-item-icon">💻</span>
        <span class="sidebar-item-text">Code Editor</span>
      </a>

      <div class="sidebar-section-label">Python</div>
      <a href="dashboard.html?section=python" class="sidebar-item ${activePage==='python'?'active':''}">
        <span class="sidebar-item-icon">🐍</span>
        <span class="sidebar-item-text">Python Topics</span>
        <span class="sidebar-item-badge">20</span>
      </a>

      <div class="sidebar-section-label">DSA</div>
      <div class="sidebar-item ${!dsaUnlocked?'locked':activePage==='dsa'?'active':''}"
           onclick="${dsaUnlocked ? "location.href='dashboard.html?section=dsa'" : "showToast('warning','🔒 DSA Locked!','Complete all Python topics + solve 300 questions to unlock DSA.')"}">
        <span class="sidebar-item-icon">🧮</span>
        <span class="sidebar-item-text">DSA Topics</span>
        ${dsaUnlocked
          ? '<span class="sidebar-item-badge">17</span>'
          : `<div style="margin-left:auto;font-size:10px;color:var(--text-muted);text-align:right;">
               <div style="font-weight:700;">${totalSolved}/300</div>
               <div>questions</div>
             </div>`
        }
      </div>
      ${!dsaUnlocked ? `
      <div style="margin:0 8px 8px;padding:8px 12px;background:rgba(124,58,237,0.04);border-radius:8px;border:1px solid rgba(124,58,237,0.1);">
        <div style="font-size:10px;color:var(--text-muted);margin-bottom:4px;">DSA Unlock Progress</div>
        <div style="height:5px;background:#e9eaf0;border-radius:99px;overflow:hidden;">
          <div style="height:100%;width:${dsaProgress}%;background:var(--gradient-primary);border-radius:99px;transition:.4s;"></div>
        </div>
        <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">${dsaProgress}% complete</div>
      </div>` : ''}

      <div class="sidebar-section-label">Backend</div>
      <div class="sidebar-item locked">
        <span class="sidebar-item-icon">🗄️</span>
        <span class="sidebar-item-text">Backend & SQL</span>
        <span style="font-size:11px;margin-left:auto;background:#f3f4f6;color:var(--text-muted);padding:2px 6px;border-radius:4px;font-weight:600;">Soon</span>
      </div>
    </nav>

    <div class="sidebar-bottom">
      <button onclick="authLogout()" class="btn w-full" style="justify-content:center;font-size:13px;background:#fef2f2;color:#dc2626;border:1px solid #fee2e2;font-weight:600;">
        🚪 Logout
      </button>
    </div>
  `;
};

// ============================================================
// PROFILE PICTURE UPLOAD
// ============================================================
window.handleAvatarUpload = async function(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Validate file size (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    showToast('error', 'File Too Large', 'Profile picture must be under 2MB.');
    return;
  }

  // Validate type
  if (!file.type.startsWith('image/')) {
    showToast('error', 'Invalid File', 'Please select an image file (JPG, PNG, etc.)');
    return;
  }

  showToast('info', '⏳ Uploading...', 'Profile picture update ho raha hai...');

  // Convert to base64 DataURL
  const reader = new FileReader();
  reader.onload = async (e) => {
    const dataUrl = e.target.result;

    // Resize/compress using canvas
    const compressed = await compressImage(dataUrl, 200, 200, 0.8);

    try {
      const userId = AppState.user?.id;
      if (!userId) return;

      // Save to Supabase profiles table
      const { error } = await supabaseClient
        .from('profiles')
        .update({ avatar_url: compressed, updated_at: new Date().toISOString() })
        .eq('id', userId);

      if (error) throw error;

      // Update local state
      if (AppState.profile) AppState.profile.avatar_url = compressed;
      localStorage.setItem('pylearn_profile', JSON.stringify(AppState.profile));

      // Re-render sidebar
      const activePage = document.body.dataset.page || 'dashboard';
      renderSidebar(activePage);

      showToast('success', '✅ Profile Updated!', 'Profile picture save ho gaya!');
    } catch (err) {
      console.error('Avatar upload error:', err);
      showToast('error', 'Upload Failed', 'Profile picture save nahi hua. Try again.');
    }
  };
  reader.readAsDataURL(file);
};

// Compress image using canvas
async function compressImage(dataUrl, maxW, maxH, quality) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let w = img.width, h = img.height;
      // Maintain aspect ratio
      if (w > h) { if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; } }
      else        { if (h > maxH) { w = Math.round(w * maxH / h); h = maxH; } }
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.src = dataUrl;
  });
}

// ============================================================
// TOPBAR RENDERING
// ============================================================
window.renderTopbar = function(title, breadcrumb = null) {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  const profile = AppState.profile || getCachedProfile() || {};
  const streak = profile.current_streak || 0;
  const xp = profile.xp_points || 0;

  topbar.innerHTML = `
    <div class="topbar-left">
      <div class="topbar-title">${title}</div>
      ${breadcrumb ? `<div class="topbar-breadcrumb">${breadcrumb}</div>` : ''}
    </div>
    <div class="topbar-right">
      <div class="xp-display">⚡ ${xp.toLocaleString()} XP</div>
      <div class="streak-display">🔥 ${streak} day${streak!==1?'s':''}</div>
    </div>
  `;
};

// ============================================================
// LOADING OVERLAY
// ============================================================
window.showLoading = function() {
  const el = document.getElementById('loading-overlay');
  if (el) el.classList.remove('hidden');
};
window.hideLoading = function() {
  const el = document.getElementById('loading-overlay');
  if (el) el.classList.add('hidden');
};

// ============================================================
// TOPIC CARD RENDERER
// ============================================================
window.renderTopicCard = function(topic, progress) {
  const prog    = progress?.[topic.id] || {};
  const locked  = !prog.is_unlocked;
  const done    = prog.is_completed;
  const correct = prog.questions_correct || 0;
  const total   = getQuestionCount(topic.id);
  const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;

  const statusBadge = done
    ? '<span class="badge badge-done">✓ Done</span>'
    : locked
    ? '<span class="badge badge-locked">🔒 Locked</span>'
    : '<span class="badge badge-unlocked">● Active</span>';

  const onclick = locked
    ? `showToast('warning','Topic Locked','Complete previous topic to unlock this one!')`
    : `goToLearn('${topic.id}')`;

  return `
    <div class="glass glass-hover topic-card ${locked?'locked':done?'completed':''}" onclick="${onclick}">
      <div class="topic-card-glow"></div>
      <div class="topic-card-header">
        <div class="topic-card-icon">${topic.icon}</div>
        ${statusBadge}
      </div>
      <div class="topic-card-num">Topic ${topic.order}</div>
      <div class="topic-card-title">${topic.title}</div>
      <div class="topic-card-desc">${topic.desc}</div>
      <div class="topic-card-footer">
        <div class="topic-card-progress">
          <div class="topic-card-progress-label">
            <span>${correct}/${total} solved</span>
            <span>${pct}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill ${done?'success':''}" style="width:${pct}%"></div>
          </div>
        </div>
        <button class="btn ${locked?'btn-secondary':'btn-primary'} btn-sm" style="flex-shrink:0" onclick="event.stopPropagation();${locked?`showToast('warning','Locked','Complete previous topic first')`:`goToLearn('${topic.id}')`}">
          ${locked?'🔒':done?'Review':'Study →'}
        </button>
      </div>
    </div>
  `;
};

// ============================================================
// NAVIGATION HELPERS
// ============================================================
window.goToLearn = function(topicId) {
  window.location.href = `learn.html?topic=${topicId}`;
};

window.goToTest = function(topicId) {
  window.location.href = `test.html?topic=${topicId}`;
};

window.goToDashboard = function() {
  window.location.href = 'dashboard.html';
};

// ============================================================
// URL PARAMS HELPER
// ============================================================
window.getUrlParam = function(key) {
  return new URLSearchParams(window.location.search).get(key);
};

// ============================================================
// STREAK CALENDAR RENDERER (last 30 days)
// ============================================================
window.renderStreakCalendar = async function(containerId) {
  const el = document.getElementById(containerId);
  if (!el || !AppState.user) return;

  const { data: activity } = await dbGetDailyActivity(AppState.user.id, 30);
  const activeDates = new Set((activity||[]).map(a => a.activity_date));
  const today = new Date().toISOString().split('T')[0];

  let html = '';
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i*86400000).toISOString().split('T')[0];
    const isToday = d === today;
    const isActive = activeDates.has(d);
    html += `<div class="streak-day ${isToday?'today':isActive?'active':''}" title="${d}"></div>`;
  }
  el.innerHTML = html;
};

// ============================================================
// STATS UPDATER
// ============================================================
window.updateTopbarStats = function() {
  const profile = AppState.profile || getCachedProfile();
  if (!profile) return;
  renderTopbar(document.getElementById('topbar')?.dataset?.title || '');
};
