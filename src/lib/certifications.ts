import { Certification } from "./types";

export const certifications: Certification[] = [
  {
    id: "cert-001",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "ABC123XYZ",
    credentialUrl: "https://aws.amazon.com/verify",
    description:
      "Professional certification demonstrating expertise in designing distributed systems on AWS.",
    skills: ["AWS", "Cloud Architecture", "DevOps"],
    order: 1,
    imageUrl: "/images/keeperapp_logo.png",
  },
  {
    id: "cert-002",
    name: "Meta Front-End Developer Professional",
    issuer: "Meta (Facebook)",
    date: "2022",
    credentialUrl: "https://coursera.org/verify",
    description:
      "Comprehensive program covering modern frontend development practices.",
    skills: ["React", "JavaScript", "Web Development"],
    order: 2,
  },
  {
    id: "cert-003",
    name: "Google UX Design Professional",
    issuer: "Google",
    date: "2021",
    description:
      "Professional certification in user experience design and research.",
    skills: ["UX Design", "Figma", "User Research"],
    order: 3,
  },
];
