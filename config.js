// ============================================================
// PyLearn Pro — Configuration File
// ============================================================

const SUPABASE_URL     = 'https://plnyqpqcejpcwueibkzu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ErHoQ9BoZhOjghY_5_FFbw_U4dGd_RT';

// Production URL (Vercel)
const SITE_BASE_URL = 'https://python-and-dsa-learning.vercel.app';


const APP_CONFIG = {
  APP_NAME: 'PyLearn Pro',
  VERSION: '1.0.0',

  // Test unlock thresholds
  MIN_QUESTIONS_PER_TOPIC: 30,      // Questions in bank per topic (initial build)
  MIN_CORRECT_TO_UNLOCK: 21,        // 70% of 30 questions
  PASS_PERCENTAGE: 70,              // % needed to pass

  // DSA unlock requirements
  DSA_UNLOCK_MIN_QUESTIONS: 300,    // Total questions must be solved
  DSA_REQUIRES_PYTHON_COMPLETE: true,

  // Streak
  STREAK_GRACE_HOURS: 48,

  // XP System
  XP_PER_CORRECT: 10,
  XP_PER_TOPIC_COMPLETE: 200,
  XP_PERFECT_SCORE_BONUS: 100,

  // Pages
  PAGES: {
    LOGIN:     'index.html',
    DASHBOARD: 'dashboard.html',
    LEARN:     'learn.html',
    TEST:      'test.html',
    EDITOR:    'editor.html',
  }
};

const TOPIC_TYPES = {
  PYTHON:  'python',
  DSA:     'dsa',
  BACKEND: 'backend',
  SQL:     'sql',
};
