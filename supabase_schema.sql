-- ============================================================
-- PyLearn Pro — Supabase Schema (Clean v2)
-- ============================================================
-- STEP 1: Supabase Dashboard →
--   Authentication → Providers → Email →
--   "Confirm email" toggle = OFF  ← email limit fix!
--
-- STEP 2: SQL Editor → New Query → Paste this → Run
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- TABLES
-- ============================================================

CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  avatar_url TEXT,
  total_questions_solved INT DEFAULT 0,
  total_correct INT DEFAULT 0,
  current_streak INT DEFAULT 0,
  longest_streak INT DEFAULT 0,
  last_activity_date DATE,
  python_completed BOOLEAN DEFAULT FALSE,
  dsa_unlocked BOOLEAN DEFAULT FALSE,
  backend_unlocked BOOLEAN DEFAULT FALSE,
  current_topic_id TEXT DEFAULT 'py_basics',
  current_topic_type TEXT DEFAULT 'python',
  xp_points INT DEFAULT 0,
  level INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS topic_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  topic_type TEXT NOT NULL CHECK (topic_type IN ('python', 'dsa', 'backend', 'sql')),
  is_unlocked BOOLEAN DEFAULT FALSE,
  is_completed BOOLEAN DEFAULT FALSE,
  questions_answered INT DEFAULT 0,
  questions_correct INT DEFAULT 0,
  best_score_percentage INT DEFAULT 0,
  total_attempts INT DEFAULT 0,
  time_spent_seconds INT DEFAULT 0,
  last_attempted TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, topic_id)
);

CREATE TABLE IF NOT EXISTS question_attempts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  question_id TEXT NOT NULL,
  topic_id TEXT NOT NULL,
  topic_type TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  selected_answer TEXT,
  correct_answer TEXT,
  time_taken_seconds INT DEFAULT 0,
  attempt_number INT DEFAULT 1,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS daily_activity (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  activity_date DATE NOT NULL,
  questions_solved INT DEFAULT 0,
  correct_answers INT DEFAULT 0,
  time_spent_seconds INT DEFAULT 0,
  topics_studied TEXT[] DEFAULT '{}',
  xp_earned INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, activity_date)
);

CREATE TABLE IF NOT EXISTS test_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  topic_type TEXT NOT NULL,
  total_questions INT NOT NULL,
  correct_answers INT NOT NULL,
  score_percentage INT NOT NULL,
  passed BOOLEAN NOT NULL,
  time_taken_seconds INT DEFAULT 0,
  questions_data JSONB,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_sessions ENABLE ROW LEVEL SECURITY;

-- Drop old policies (safe to re-run)
DROP POLICY IF EXISTS "Users can view own profile"    ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile"  ON profiles;
DROP POLICY IF EXISTS "Users can update own profile"  ON profiles;

DROP POLICY IF EXISTS "Users can view own topic progress"   ON topic_progress;
DROP POLICY IF EXISTS "Users can insert own topic progress" ON topic_progress;
DROP POLICY IF EXISTS "Users can update own topic progress" ON topic_progress;

DROP POLICY IF EXISTS "Users can view own attempts"   ON question_attempts;
DROP POLICY IF EXISTS "Users can insert own attempts" ON question_attempts;

DROP POLICY IF EXISTS "Users can view own activity"   ON daily_activity;
DROP POLICY IF EXISTS "Users can insert own activity" ON daily_activity;
DROP POLICY IF EXISTS "Users can update own activity" ON daily_activity;

DROP POLICY IF EXISTS "Users can view own test sessions"   ON test_sessions;
DROP POLICY IF EXISTS "Users can insert own test sessions" ON test_sessions;

-- Create policies
CREATE POLICY "Users can view own profile"   ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own topic progress"   ON topic_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own topic progress" ON topic_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own topic progress" ON topic_progress FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own attempts"   ON question_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own attempts" ON question_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own activity"   ON daily_activity FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own activity" ON daily_activity FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own activity" ON daily_activity FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own test sessions"   ON test_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own test sessions" ON test_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- TRIGGER: Auto profile + py_basics unlock on signup
-- ON CONFLICT DO NOTHING = safe even if trigger fires twice
-- Works with email confirmation ON or OFF
-- ============================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  _username TEXT;
BEGIN
  -- Username from metadata → else email prefix → else user_id
  _username := COALESCE(
    NULLIF(TRIM(NEW.raw_user_meta_data->>'username'), ''),
    NULLIF(REGEXP_REPLACE(SPLIT_PART(NEW.email, '@', 1), '[^a-zA-Z0-9_]', '', 'g'), ''),
    'user_' || SUBSTR(NEW.id::TEXT, 1, 8)
  );

  -- Insert profile (ignore if already exists)
  INSERT INTO public.profiles (id, email, username)
  VALUES (NEW.id, COALESCE(NEW.email, ''), _username)
  ON CONFLICT (id) DO NOTHING;

  -- Unlock first Python topic (ignore if already exists)
  INSERT INTO public.topic_progress (user_id, topic_id, topic_type, is_unlocked)
  VALUES (NEW.id, 'py_basics', 'python', TRUE)
  ON CONFLICT (user_id, topic_id) DO NOTHING;

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Never fail silently — log but don't block signup
  RAISE WARNING 'handle_new_user error for %: %', NEW.id, SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_topic_progress_user_id    ON topic_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_topic_progress_topic_id   ON topic_progress(topic_id);
CREATE INDEX IF NOT EXISTS idx_question_attempts_user_id ON question_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_activity_user_date  ON daily_activity(user_id, activity_date);
CREATE INDEX IF NOT EXISTS idx_test_sessions_user_id     ON test_sessions(user_id);
