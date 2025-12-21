// Static data for the portfolio
import { Experience, Certification, Project, PersonalInfo } from "./types";

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Senior Full Stack Developer",
  bio: "Passionate developer with 5+ years of experience building modern web applications. Specialized in React, Next.js, and TypeScript. Love creating clean, efficient, and user-friendly solutions.",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "Jakarta, Indonesia",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  website: "https://johndoe.com",
};

export const experiences: Experience[] = [
  {
    id: "exp-001",
    year: "2024",
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Jakarta, Indonesia",
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
    location: "Jakarta, Indonesia",
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
    location: "Jakarta, Indonesia",
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

export const projects: Project[] = [
  {
    id: "proj-001",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with real-time inventory management",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js 14, featuring real-time inventory management, payment integration, and an admin dashboard. The platform handles 10,000+ daily transactions and serves 50,000+ active users. Built with performance and scalability in mind, utilizing server-side rendering and incremental static regeneration.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    category: "Web Application",
    featured: true,
    year: "2023",
    order: 1,
    imageUrl: "/images/keeperapp_logo.png",
  },
  {
    id: "proj-002",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    longDescription:
      "A real-time collaborative task management application similar to Trello, built with React and Firebase. Features include drag-and-drop kanban boards, real-time collaboration, team management, and custom workflows. Supports 1000+ concurrent users with instant updates across all devices.",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    category: "SaaS",
    featured: true,
    year: "2023",
    order: 2,
    imageUrl: "/images/cat.jpg",
  },
  {
    id: "proj-003",
    title: "Portfolio Builder",
    description: "No-code portfolio website builder for developers",
    longDescription:
      "A drag-and-drop portfolio builder that allows developers to create beautiful portfolio websites without coding. Features include customizable templates, GitHub integration, project showcase, blog functionality, and SEO optimization. Over 5,000 developers have created their portfolios using this platform.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vercel"],
    category: "Tool",
    featured: false,
    year: "2022",
    order: 3,
    imageUrl: "/images/keeperapp_logo.png",
  },
  {
    id: "proj-004",
    title: "AI Code Assistant",
    description: "VS Code extension for AI-powered code suggestions",
    longDescription:
      "An intelligent code assistant extension for Visual Studio Code that provides context-aware code suggestions, automatic documentation, and code refactoring recommendations. Powered by OpenAI's GPT-4, it helps developers write better code faster. Currently used by 10,000+ developers worldwide.",
    technologies: ["TypeScript", "VS Code API", "OpenAI API", "Node.js"],
    category: "Developer Tool",
    featured: true,
    year: "2024",
    order: 4,
    imageUrl: "/images/cat.jpg",
  },
  {
    id: "proj-003",
    title: "Portfolio Builder",
    description: "No-code portfolio website builder for developers",
    longDescription:
      "A drag-and-drop portfolio builder that allows developers to create beautiful portfolio websites without coding. Features include customizable templates, GitHub integration, project showcase, blog functionality, and SEO optimization. Over 5,000 developers have created their portfolios using this platform.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vercel"],
    category: "Tool",
    featured: false,
    year: "2022",
    order: 3,
    imageUrl: "/images/keeperapp_logo.png",
  },
  {
    id: "proj-003",
    title: "Portfolio Builder",
    description: "No-code portfolio website builder for developers",
    longDescription:
      "A drag-and-drop portfolio builder that allows developers to create beautiful portfolio websites without coding. Features include customizable templates, GitHub integration, project showcase, blog functionality, and SEO optimization. Over 5,000 developers have created their portfolios using this platform.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vercel"],
    category: "Tool",
    featured: false,
    year: "2022",
    order: 3,
    imageUrl: "/images/keeperapp_logo.png",
  },
  {
    id: "proj-003",
    title: "Portfolio Builder",
    description: "No-code portfolio website builder for developers",
    longDescription:
      "A drag-and-drop portfolio builder that allows developers to create beautiful portfolio websites without coding. Features include customizable templates, GitHub integration, project showcase, blog functionality, and SEO optimization. Over 5,000 developers have created their portfolios using this platform.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vercel"],
    category: "Tool",
    featured: false,
    year: "2022",
    order: 3,
    imageUrl: "/images/keeperapp_logo.png",
  },
  {
    id: "proj-003",
    title: "Portfolio Builder",
    description: "No-code portfolio website builder for developers",
    longDescription:
      "A drag-and-drop portfolio builder that allows developers to create beautiful portfolio websites without coding. Features include customizable templates, GitHub integration, project showcase, blog functionality, and SEO optimization. Over 5,000 developers have created their portfolios using this platform.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vercel"],
    category: "Tool",
    featured: false,
    year: "2022",
    order: 3,
    imageUrl: "/images/keeperapp_logo.png",
  },
  {
    id: "proj-003",
    title: "Portfolio Builder",
    description: "No-code portfolio website builder for developers",
    longDescription:
      "A drag-and-drop portfolio builder that allows developers to create beautiful portfolio websites without coding. Features include customizable templates, GitHub integration, project showcase, blog functionality, and SEO optimization. Over 5,000 developers have created their portfolios using this platform.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vercel"],
    category: "Tool",
    featured: false,
    year: "2022",
    order: 3,
    imageUrl: "/images/keeperapp_logo.png",
  },
];
