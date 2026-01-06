import { Certification } from "../types";

export const certifications: Certification[] = [
  {
    id: "cert-001",
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2025",
    imageUrl: "/images/certifications/dicoding_logo.jpeg",
    credentialUrl: "https://www.dicoding.com/certificates/RVZKGMJ7QXD5",
    description:
      "Completed a foundational course in Artificial Intelligence, covering basic concepts, algorithms, and applications of AI technology.",
    skills: ["Artificial Intelligence", "Machine Learning", "Python"],
    order: 1,
  },
  {
    id: "cert-002",
    name: "Certificate of Achievement – Student Organization Capacity Strengthening Program (PPK Ormawa) 2024",
    issuer: "Pusat Layanan Pembiayaan Pendidikan Kemendikbud Ristek",
    date: "2024",
    imageUrl: "/images/certifications/ppkormawahumanika-dikti.jpeg",
    credentialUrl:
      "https://drive.google.com/file/d/1bEJYR4nAQLBLF0smhp5WolSIehFElayK/view?usp=drivesdk",
    description:
      "Awarded for active participation in the PPK Ormawa 2024 program. Recognizes contributions to community empowerment, organizational development, and innovative projects for sustainable growth.",
    skills: [
      "Project Management",
      "Community Engagement",
      "Contect Management",
    ],
    order: 2,
  },
  {
    id: "cert-003",
    name: "Certificate of Achievement – PPK ORMAWA Grant Recipient 2024",
    issuer: "Universitas AKPRIND Indonesia",
    date: "2024",
    imageUrl: "/images/certifications/ppkormawahumanika-uai.jpeg",
    credentialUrl:
      "https://drive.google.com/file/d/14nOzB8nd95NPwRIBdJn8R0arXJCeMerK/view?usp=drivesdk",
    description:
      "Awarded for obtaining grant funding for PPK ORMAWA 2024. Acknowledges contributions to innovative project proposals for community empowerment and organizational development.",
    skills: ["Project Proposal", "Organizational Development"],
    order: 3,
  },
  {
    id: "cert-004",
    name: "CSS Introduction",
    issuer: "My Skill",
    date: "2024",
    imageUrl: "/images/certifications/css-introduction_myskill.png",
    credentialUrl:
      "https://drive.google.com/file/d/1gxOeu47xHyC2YQ9iSuQkEVBNeyv0LI3D/view?usp=drivesdk",
    description:
      "Introduction to CSS fundamentals, including styling, layouts, and responsive design techniques for web development.",
    skills: ["CSS3", "HTML5", "Web Development"],
    order: 4,
  },
];
