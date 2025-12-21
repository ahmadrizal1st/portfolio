import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "exp-001",
    year: "2024",
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Yogyakarta, Indonesia",
    duration: "2022 - Present",
    description:
      "Leading frontend development for enterprise applications using Next.js and React.",
    achievements: [
      "Improved application performance by 60% through code optimization",
      "Implemented micro-frontend architecture for scalable development",
      "Mentored junior developers and established best practices",
    ],
    skills: ["React", "Next.js", "TypeScript", "GraphQL"],
    type: "full-time",
    order: 1,
    imageUrl: "/images/cat.jpg",
  },
  {
    id: "exp-002",
    year: "2022",
    position: "Full Stack Developer",
    company: "Digital Innovations",
    location: "Yogyakarta, Indonesia",
    duration: "2020 - 2022",
    description:
      "Developed and maintained full-stack applications for various clients.",
    achievements: [
      "Built 10+ production applications from scratch",
      "Reduced deployment time by 40% with CI/CD automation",
      "Implemented real-time features using WebSocket",
    ],
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    type: "full-time",
    order: 2,
    imageUrl: "/images/keeperapp_logo.png",
  },
  {
    id: "exp-003",
    year: "2020",
    position: "Technical Lead",
    company: "Developer Community",
    location: "Yogyakarta, Indonesia",
    duration: "2019 - Present",
    description:
      "Leading technical workshops and community events for developers.",
    achievements: [
      "Organized 20+ technical workshops",
      "Grew community to 5000+ members",
      "Created learning resources for beginners",
    ],
    skills: ["Leadership", "Public Speaking", "Mentoring"],
    type: "organization",
    order: 3,
  },
];
