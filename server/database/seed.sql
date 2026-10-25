-- Demo data, matching the hardcoded frontend data.
-- INSERT INTO, not INSERT DATA INTO, and one value per column.

INSERT INTO candidates (candidate_id, candidate_name, email, skills) VALUES
(1, 'John Doe', 'john.doe@example.com', 'Java, Python, SQL'),
(2, 'Jordan Smith', 'jordan.smith@example.com', 'JavaScript, HTML, CSS'),
(3, 'Joaquin Johnson', 'joaquin.johnson@example.com', 'C++, C#, .NET'),
(4, 'Jaiden Williams', 'jaiden.williams@example.com', 'Ruby, Rails, PostgreSQL')
ON CONFLICT (candidate_id) DO NOTHING;

INSERT INTO jobs (job_id, job_title, job_description, required_skills) VALUES
(1, 'Software Engineer', 'Develop and maintain software applications.', 'Java, Python, SQL'),
(2, 'Front-End Developer', 'Design and implement user interfaces for web applications.', 'JavaScript, HTML, CSS'),
(3, 'Back-End Developer', 'Build and maintain server-side logic and databases.', 'C++, C#, .NET'),
(4, 'Full-Stack Developer', 'Work on both front-end and back-end development.', 'Ruby, Rails, PostgreSQL')
ON CONFLICT (job_id) DO NOTHING;
