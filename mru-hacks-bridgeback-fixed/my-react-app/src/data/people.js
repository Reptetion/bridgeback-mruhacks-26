import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";

// Hardcoded demo data, on purpose for the hackathon demo.
// No backend call is needed to show Candidates, Jobs, Bridgers, or Matches.
export const candidates = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Developer",
    email: "john.doe@example.com",
    skills: ["Java", "Python", "SQL"],
    status: "Available",
    photo: user1,
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Front-End Developer",
    email: "jordan.smith@example.com",
    skills: ["JavaScript", "HTML", "CSS"],
    status: "Available",
    photo: user2,
  },
  {
    id: 3,
    name: "Joaquin Johnson",
    role: "Back-End Developer",
    email: "joaquin.johnson@example.com",
    skills: ["C++", "C#", ".NET"],
    status: "Available",
    photo: user3,
  },
  {
    id: 4,
    name: "Jaiden Williams",
    role: "Full-Stack Developer",
    email: "jaiden.williams@example.com",
    skills: ["Ruby", "Rails", "PostgreSQL"],
    status: "Available",
    photo: user4,
  },
];

export const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Develop and maintain software applications.",
    requiredSkills: ["Java", "Python", "SQL"],
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Front-End Developer",
    description: "Design and implement user interfaces for web applications.",
    requiredSkills: ["JavaScript", "HTML", "CSS"],
    location: "Hybrid",
    type: "Contract",
  },
  {
    id: 3,
    title: "Back-End Developer",
    description: "Build and maintain server-side logic and databases.",
    requiredSkills: ["C++", "C#", ".NET"],
    location: "On-site",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    description: "Work on both front-end and back-end development.",
    requiredSkills: ["Ruby", "Rails", "PostgreSQL"],
    location: "Remote",
    type: "Part-time",
  },
];

export function matchScore(candidate, job) {
  const matched = job.requiredSkills.filter((skill) =>
    candidate.skills.includes(skill),
  );
  return {
    matched,
    percent: Math.round((matched.length / job.requiredSkills.length) * 100),
  };
}

export const matches = jobs.map((job) => {
  const best = candidates
    .map((candidate) => ({ candidate, ...matchScore(candidate, job) }))
    .sort((a, b) => b.percent - a.percent)[0];
  return { job, ...best };
});
