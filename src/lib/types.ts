// Type definitions for portfolio data

export interface Experience {
  id: string;
  year: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
  type:
    | "full-time"
    | "part-time"
    | "intern"
    | "organization"
    | "volunteer"
    | "freelance";
  order: number;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  order: number;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  order: number;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export type PageType =
  | "splash"
  | "home"
  | "about"
  | "experience"
  | "certification"
  | "project"
  | "project-detail"
  | "contact";
