import { Project } from "../types";

export const projects: Project[] = [
  // Pinned projects
  {
    id: "proj-001",
    featured: true,
    title: "HUMANIKA Organization Management",
    description:
      "Official website for the Informatics Student Association at AKPRIND University, featuring organization profile, activities, and member registration.",
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
      "Mobile app for secure file storage and management in cloud and local, with offline access using Kotlin and Firebase.",
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
    id: "proj-007",
    featured: true,
    title: "TrimUrl",
    description: "",
    longDescription:
      "A full-stack URL shortener application consisting of a Go backend API and a React TypeScript frontend. This project allows users to shorten long URLs, manage them with custom short codes, set expiration times, add tags, and track redirects.",
    technologies: ["react", "typescript", "vite", "go", "redis", "postgres"],
    category: "Website Application",
    year: "2025",
    order: 7,
    imageUrl: "/images/projects/trimurl.png",
    githubUrl: "https://github.com/ahmadrizal1st/trimurl",
  },

  // Other projects
  {
    id: "proj-004",
    featured: false,
    title: "Cengkrem",
    description:
      "website information system for cengkrem.id home, article, product, gallery, and contact",
    longDescription: "",
    technologies: ["wordpress", "cms", "php"],
    category: "Website Application",
    year: "2023",
    order: 4,
    imageUrl: "/images/projects/cengkrem.jpeg",
    githubUrl: "https://cengkrem.id",
  },
  {
    id: "proj-004",
    featured: false,
    title: "Wijaya Kusuma Craft",
    description: "website finance dashboard for wijaya kusuma craft",
    longDescription: "",
    technologies: ["mysql", "mvc", "php", "javascript"],
    category: "Desktop Application",
    year: "2025",
    order: 4,
    imageUrl: "/images/projects/wijaya-kusuma-craft.jpeg",
    githubUrl: "https://github.com/ahmadrizal1st/wkc-finance-dashboard",
  },
  {
    id: "proj-004",
    featured: false,
    title: "Cadira Rental",
    description:
      "Simple Car Rental Management System in Java with MVC architecture",
    longDescription:
      "This is a simple Car Rental Management System developed in Java using Swing for the GUI, MySQL for the database, and following the Model-View-Controller (MVC) architectural pattern.",
    technologies: ["mysql", "mvc", "javafx", "swing"],
    category: "Desktop Application",
    year: "2025",
    order: 4,
    imageUrl: "/images/projects/cardira-rental.png",
    githubUrl: "https://github.com/ahmadrizal1st/cadira-rental",
  },
  {
    id: "proj-005",
    featured: false,
    title: "Aquafin",
    description:
      "Laravel-based information system for managing aquaculture operations with admin panel and Docker setup.",
    longDescription:
      "A Laravel-based information system for managing aquaculture (fish farming) operations. The project includes a powerful admin panel for updating cultivation information and tracking financial transactions, all built with the Filament admin toolkit. It is fully dockerized for a streamlined setup and uses MySQL for data persistence.",
    technologies: ["laravel", "mysql", "filament", "docker"],
    category: "Website Application",
    year: "2025",
    order: 5,
    imageUrl: "/images/projects/aquafin.png",
    githubUrl: "https://github.com/ahmadrizal1st/aquafin",
  },
  {
    id: "proj-006",
    featured: false,
    title: "Tun8n",
    description:
      "Dockerized n8n with Ngrok integration for instant webhook exposure and custom domain support.",
    longDescription:
      "Tun8n - Dockerized n8n with Ngrok integration for instant webhook exposure. Deploy your automation workflows in minutes with custom domain support.",
    technologies: ["n8n", "docker", "ngrok"],
    category: "Website Application",
    year: "2025",
    order: 6,
    imageUrl: "/images/projects/tun8n.png",
    githubUrl: "https://github.com/ahmadrizal1st/tun8n",
  },
  {
    id: "proj-003",
    featured: false,
    title: "URL Shortener",
    description:
      "Simple URL shortener API built with Golang, PostgreSQL, and Redis for generating short links.",
    longDescription:
      "A simple URL shortener built with Golang, PostgreSQL, and Redis. It stores original URLs and generates short links for easy sharing.",
    technologies: ["golang", "postgres", "redis"],
    category: "API",
    year: "2025",
    order: 3,
    imageUrl: "/images/projects/url-shortener.png",
    githubUrl: "https://github.com/ahmadrizal1st/url-shortener",
  },
];
