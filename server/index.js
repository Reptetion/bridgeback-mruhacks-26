const express = require("express");
const cors = require("cors");

// Fixed import: the pool lives in ./database/db.js, not ./db.js.
// The pool is only used if a database route is added later. The demo
// routes below use the same hardcoded data as the frontend, so the
// server starts even without Postgres running.
const pool = require("./database/db.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const candidates = [
  { id: 1, name: "John Doe", role: "Software Developer", skills: ["Java", "Python", "SQL"] },
  { id: 2, name: "Jordan Smith", role: "Front-End Developer", skills: ["JavaScript", "HTML", "CSS"] },
  { id: 3, name: "Joaquin Johnson", role: "Back-End Developer", skills: ["C++", "C#", ".NET"] },
  { id: 4, name: "Jaiden Williams", role: "Full-Stack Developer", skills: ["Ruby", "Rails", "PostgreSQL"] },
];

const jobs = [
  { id: 1, title: "Software Engineer", description: "Develop and maintain software applications.", requiredSkills: ["Java", "Python", "SQL"], location: "Remote", type: "Full-time" },
  { id: 2, title: "Front-End Developer", description: "Design and implement user interfaces for web applications.", requiredSkills: ["JavaScript", "HTML", "CSS"], location: "Hybrid", type: "Contract" },
  { id: 3, title: "Back-End Developer", description: "Build and maintain server-side logic and databases.", requiredSkills: ["C++", "C#", ".NET"], location: "On-site", type: "Full-time" },
  { id: 4, title: "Full-Stack Developer", description: "Work on both front-end and back-end development.", requiredSkills: ["Ruby", "Rails", "PostgreSQL"], location: "Remote", type: "Part-time" },
];

function matchesFor(job) {
  return candidates
    .map((candidate) => {
      const matched = job.requiredSkills.filter((skill) => candidate.skills.includes(skill));
      return { candidate, matched, percent: Math.round((matched.length / job.requiredSkills.length) * 100) };
    })
    .sort((a, b) => b.percent - a.percent);
}

app.get("/", (req, res) => {
  res.json({ name: "BridgeBack", message: "Find opportunities that fit your skills and goals." });
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/candidates", (req, res) => {
  res.json(candidates);
});

app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.get("/api/matches", (req, res) => {
  res.json(jobs.map((job) => ({ job, best: matchesFor(job)[0] })));
});

// Keep the pool referenced so the import is not dead code, and so a
// future database route can use it. Do not query it on startup.
void pool;

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
