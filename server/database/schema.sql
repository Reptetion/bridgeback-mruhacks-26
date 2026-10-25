-- BridgeBack tables. Run this before seed.sql.
-- This is optional for the hardcoded frontend demo, but it is now valid SQL.

CREATE TABLE IF NOT EXISTS candidates (
    candidate_id SERIAL PRIMARY KEY,
    candidate_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    skills TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS jobs (
    job_id SERIAL PRIMARY KEY,
    job_title VARCHAR(100) NOT NULL,
    job_description TEXT NOT NULL,
    required_skills TEXT NOT NULL
);
