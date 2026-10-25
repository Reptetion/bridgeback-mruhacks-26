import user1 from "../assets/candidates/user1.jpg";
import user2 from "../assets/candidates/user2.jpg";
import user3 from "../assets/candidates/user3.jpg";
import user4 from "../assets/candidates/user4.jpg";
import user5 from "../assets/candidates/user5.jpg";
import user6 from "../assets/candidates/user6.jpg";
import user7 from "../assets/candidates/user7.jpg";
import user8 from "../assets/candidates/user8.jpg";


export const candidates = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Senior UX/UI Designer",
    email: "elena.rostova@example.com",
    bio: "Creating intuitive digital experiences with a user-centric focus.",
    location: "San Francisco, CA",
    skills: [
      "User Research",
      "Figma",
      "Prototyping",
      "Visual Design",
      "Interaction Design",
      "Teamwork",
      "Product Strategy",
      "HTML/CSS",
    ],
    status: "Available",
    photo: user1,
    match: 96,
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Front-End Developer",
    email: "jordan.smith@example.com",
    skills: ["JavaScript", "HTML", "CSS"],
    status: "Available",
    photo: user2,
    match: 91,
  },
  {
    id: 3,
    name: "Joaquin Johnson",
    role: "Back-End Developer",
    email: "joaquin.johnson@example.com",
    skills: ["C++", "C#", ".NET"],
    status: "Available",
    photo: user3,
    match: 88,
  },
  {
    id: 4,
    name: "Jaiden Williams",
    role: "Full-Stack Developer",
    email: "jaiden.williams@example.com",
    skills: ["Ruby", "Rails", "PostgreSQL"],
    status: "Available",
    photo: user4,
    match: 85,
  },
  {
    id: 5,
    name: "Avery Lee",
    role: "Product Designer",
    email: "avery.lee@example.com",
    skills: ["Design Systems", "Research", "UX Writing"],
    status: "Available",
    photo: null,
    match: 90,
  },
  {
    id: 6,
    name: "Marcus Brooks",
    role: "Software Engineer",
    email: "marcus.brooks@example.com",
    skills: ["React", "Node", "MongoDB"],
    status: "Available",
    photo: null,
    match: 87,
  },
  {
    id: 5,
    name: "Warren Chang",
    role: "Full-Stack Developer",
    skills: ["Java", "HTML", "C++"],
    status: "Available",
    photo: user5,
  }

  {
    id: 6,
    name: "Elena Rostova",
    role: "Front-End Developer",
    email: "elena.rostova@example.com",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    status: "Available",
    photo: user6,
  },
  {
    id: 7,
    name: "Marcus Vance",
    role: "DevOps Engineer",
    email: "marcus.vance@example.com",
    skills: ["Docker", "Kubernetes", "AWS"],
    status: "Available",
    photo: user7,
  },
  {
    id: 8,
    name: "Aria Chen",
    role: "UI/UX Designer",
    email: "aria.chen@example.com",
    skills: ["Figma", "CSS", "User Research"],
    status: "Available",
    photo: user8,
  },
]


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
  {
  id: 5,
  title: "Backend Systems Engineer",
  description: "Design, build, and maintain high-throughput microservices and data processing pipelines.",
  requiredSkills: ["Go", "gRPC", "Docker", "Kubernetes", "PostgreSQL"],
  location: "Hybrid",
  type: "Full-time"
},
{
    id: 6,
    title: "Front-End Developer",
    description: "Develop responsive and interactive web user interfaces using modern JavaScript frameworks.",
    requiredSkills: ["React", "TypeScript", "Tailwind CSS"],
    location: "Remote",
    type: "Full-time"
  },
  {
    id: 7,
    title: "DevOps Engineer",
    description: "Automate CI/CD pipelines and manage cloud infrastructure scalability and security.",
    requiredSkills: ["Docker", "Kubernetes", "AWS"],
    location: "On-site",
    type: "Full-time"
  },
  {
    id: 8,
    title: "UI/UX Designer",
    description: "Create user-centered designs, wireframes, and high-fidelity prototypes for web apps.",
    requiredSkills: ["Figma", "CSS", "User Research"],
    location: "Hybrid",
    type: "Contract"
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

