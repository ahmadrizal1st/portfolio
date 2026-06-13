import { Project } from "../types";

export const projects: Project[] = [
  // Featured projects
  {
    id: "proj-001",
    featured: true,
    title: "HUMANIKA Organization Management",
    description:
      "Built a full-stack organization platform handling member registrations with Next.js & MongoDB — solving manual administrative workflows.",
    longDescription:
      "Official website of the Informatics Student Association (HUMANIKA) at AKPRIND University of Indonesia. Provides information on the organization's profile, activities, and member registration for the Informatics Study Program student association. Features: Organization Profile, Division Information, Activities, Member Registration, and Activity Gallery.",
    technologies: [
      "nextjs",
      "tailwindcss",
      "typescript",
      "prisma",
      "mongodb",
      "google drive api",
    ],
    category: "Website Application",
    year: "2025",
    order: 1,
    imageUrl: "/images/projects/humanika.png",
    githubUrl: "https://github.com/ahmadrizal1st/website-humanika",
  },
  {
    id: "proj-002",
    featured: true,
    title: "Keeper App",
    description:
      "Developed a mobile file storage app with Firebase and Room — enabling offline-first access and cloud synchronization for seamless file management.",
    longDescription:
      "Keeper App is a mobile application that allows users to securely store, manage, and access files both in the cloud and locally. Built with Kotlin, it utilizes Firebase for user authentication, cloud storage, and real-time synchronization, along with Room Database for fast offline access. Users can upload various file types, organize them into folders, and seamlessly access their data anytime, whether online or offline",
    technologies: ["kotlin", "firebase", "room", "sqlite"],
    category: "Mobile Application",
    year: "2025",
    order: 2,
    imageUrl: "/images/projects/keeper-app.png",
    githubUrl: "https://github.com/ahmadrizal1st/keeper-app",
  },
  {
    id: "proj-003",
    featured: true,
    title: "Cadira Rental",
    description:
      "Created a Car Rental Management System in Java with MVC architecture — streamlining vehicle tracking and transaction processing.",
    longDescription:
      "This is a simple Car Rental Management System developed in Java using Swing for the GUI, MySQL for the database, and following the Model-View-Controller (MVC) architectural pattern.",
    technologies: ["mysql", "mvc", "javafx", "swing"],
    category: "Desktop Application",
    year: "2025",
    order: 3,
    imageUrl: "/images/projects/cardira-rental.png",
    githubUrl: "https://github.com/ahmadrizal1st/cadira-rental",
  },

  // Other projects
  {
    id: "proj-004",
    featured: false,
    title: "Cengkrem",
    description:
      "Official website for Cengkrem - an information system featuring articles, product showcase, gallery, and contact functionality",
    longDescription:
      "Official website for Cengkrem - a comprehensive information system built with WordPress. The platform provides a complete online presence with features including an engaging home page, dynamic article/blog section for content publishing, product showcase for displaying offerings, an interactive image gallery, and a fully functional contact page. Built with WordPress CMS for easy content management and powered by PHP.",
    technologies: ["wordpress", "cms", "php"],
    category: "Website Application",
    year: "2024",
    order: 4,
    imageUrl: "/images/projects/cengkrem.jpeg",
    githubUrl: "https://cengkrem.id",
  },
  {
    id: "proj-005",
    featured: false,
    title: "Wijaya Kusuma Craft",
    description:
      "Website finance dashboard for Wijaya Kusuma Craft - managing transactions, reports, and financial tracking",
    longDescription:
      "A website finance dashboard application built for Wijaya Kusuma Craft to streamline their financial management operations. The system provides comprehensive tools for tracking transactions, generating financial reports, and monitoring business performance. Built using PHP with MVC architecture, MySQL for data storage, and JavaScript for interactive features, this application helps the business maintain accurate financial records and make informed decisions.",
    technologies: ["mysql", "mvc", "php", "javascript"],
    category: "Website Application",
    year: "2025",
    order: 5,
    imageUrl: "/images/projects/wijaya-kusuma-craft.jpeg",
    githubUrl: "https://github.com/ahmadrizal1st/wkc-finance-dashboard",
  },
  {
    id: "proj-006",
    featured: false,
    title: "TrimUrl",
    description:
      "Engineered a full-stack URL shortener with a Go backend and React frontend — utilizing Redis caching to deliver fast, trackable redirects.",
    longDescription:
      "A full-stack URL shortener application consisting of a Go backend API and a React TypeScript frontend. This project allows users to shorten long URLs, manage them with custom short codes, set expiration times, add tags, and track redirects.",
    technologies: ["react", "typescript", "vite", "go", "redis", "postgres"],
    category: "Website Application",
    year: "2025",
    order: 6,
    imageUrl: "/images/projects/trimurl.png",
    githubUrl: "https://github.com/ahmadrizal1st/trimurl",
  },
  {
    id: "proj-007",
    featured: false,
    title: "Aquafin",
    description:
      "Developed an aquaculture management system with Laravel and Docker — streamlining fish farming operations and financial tracking through a centralized admin panel.",
    longDescription:
      "A Laravel-based information system for managing aquaculture (fish farming) operations. The project includes a powerful admin panel for updating cultivation information and tracking financial transactions, all built with the Filament admin toolkit. It is fully dockerized for a streamlined setup and uses MySQL for data persistence.",
    technologies: ["laravel", "mysql", "filament", "docker"],
    category: "Website Application",
    year: "2025",
    order: 7,
    imageUrl: "/images/projects/aquafin.png",
    githubUrl: "https://github.com/ahmadrizal1st/aquafin",
  },
  {
    id: "proj-008",
    featured: false,
    title: "Tun8n",
    description:
      "Dockerized n8n with Ngrok integration for instant webhook exposure and custom domain support.",
    longDescription:
      "Tun8n - Dockerized n8n with Ngrok integration for instant webhook exposure. Deploy your automation workflows in minutes with custom domain support.",
    technologies: ["n8n", "docker", "ngrok"],
    category: "Website Application",
    year: "2025",
    order: 8,
    imageUrl: "/images/projects/tun8n.png",
    githubUrl: "https://github.com/ahmadrizal1st/tun8n",
  },
  {
    id: "proj-009",
    featured: false,
    title: "URL Shortener",
    description:
      "Simple URL shortener API built with Golang, PostgreSQL, and Redis for generating short links.",
    longDescription:
      "A simple URL shortener built with Golang, PostgreSQL, and Redis. It stores original URLs and generates short links for easy sharing.",
    technologies: ["golang", "postgres", "redis"],
    category: "API",
    year: "2025",
    order: 9,
    imageUrl: "/images/projects/url-shortener.png",
    githubUrl: "https://github.com/ahmadrizal1st/url-shortener",
  },
];
