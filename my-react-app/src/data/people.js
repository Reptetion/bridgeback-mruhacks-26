import user1 from "../assets/candidates/user1.jpg";
import user2 from "../assets/candidates/user2.jpg";
import user3 from "../assets/candidates/user3.jpg";
import user4 from "../assets/candidates/user4.jpg";


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
];
