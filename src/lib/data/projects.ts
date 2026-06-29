import { Project } from "../types";

export const projects: Project[] = [
  // Featured projects
  {
    id: "46e9abbb-1408-4839-b7c8-fc17cd0deb47",
    featured: true,
    title: "Mora",
    description:
      "A full-stack personal finance application powered by an AI pipeline for transaction inputs (Text, OCR, PDF, STT), multi-LLM failover, and gamification.",
    longDescription: `Mora is a comprehensive full-stack personal finance management platform engineered with a monorepo architecture, designed to make financial tracking intelligent, accessible, and engaging.

**Core AI Pipeline**
The centerpiece of Mora is its multi-modal AI pipeline that processes transaction inputs through four channels: natural language text, image-based OCR for receipts and invoices, PDF parsing for bank statements, and Speech-to-Text (STT) for voice inputs. All inputs are processed asynchronously to ensure a non-blocking, responsive user experience.

**Multi-LLM Failover System**
Mora implements a resilient multi-LLM orchestration layer with automatic failover across six AI providers Gemini, Groq, OpenAI, Anthropic, Ollama, and Mistral. A unique "bring your own key" (BYOK) feature allows each user to configure their own API keys per provider, giving full control over cost and privacy.

**Financial Intelligence**
The system auto-categorizes transactions, tracks spending patterns, and visualizes budgets through custom SVG-based 50/30/20 budget ring charts built entirely from scratch without charting libraries for maximum performance and customizability.

**Gamification Engine**
To encourage positive financial habits, Mora integrates a gamification system featuring XP points, daily/weekly streaks, and achievement badges. Users are rewarded for consistent logging, hitting savings goals, and maintaining budget discipline.

**Technical Architecture**
Built on a React + Vite frontend with TypeScript, a Laravel PHP backend serving the core API, and a FastAPI Python microservice handling the AI processing layer. PostgreSQL serves as the primary data store, with the entire stack containerized via Docker for reproducible deployments.`,
    technologies: [
      "react",
      "typescript",
      "vite",
      "laravel",
      "php",
      "postgresql",
      "fastapi",
      "docker",
    ],
    category: "Website Application",
    year: "2026",
    order: 0,
    imageUrl: "/images/projects/mora.png",
    githubUrl: "https://github.com/ahmadrizal1st/mora",
  },
  {
    id: "5da5484c-f908-432e-9184-565ea9215dec",
    featured: true,
    title: "HUMANIKA Organization Management",
    description:
      "Built a full-stack organization platform handling member registrations with Next.js & MongoDB  solving manual administrative workflows.",
    longDescription: `HUMANIKA is the official digital platform for the Informatics Student Association at Universitas AKPRIND Indonesia, built to replace a fragmented, manual administrative workflow with a unified, modern web application.

**Problem Solved**
Before this platform, member registrations were handled via paper forms and scattered spreadsheets, leading to data inconsistencies, lost records, and slow onboarding. The website centralizes all organizational activities into a single, accessible source of truth.

**Key Features**
- **Organization Profile & Divisions**: Dynamic pages showcasing the organizational structure, mission, vision, and individual division descriptions all managed through a content layer backed by MongoDB.
- **Member Registration System**: A multi-step registration form with validation, duplicate detection, and automatic data storage. Submitted member data is organized and accessible through an admin dashboard.
- **Activity Gallery**: A responsive image gallery powered by Google Drive API, allowing administrators to upload activity photos directly from Drive without manual file management.
- **Activity Feed**: A dynamic section for publishing organizational events, news, and announcements with rich text support.

**Technical Highlights**
The application is built with Next.js (App Router) for server-side rendering and optimal SEO, TypeScript for type safety, Prisma ORM for schema-driven data modeling against MongoDB, and Tailwind CSS for a consistent design system. Google Drive API integration eliminates the need for dedicated storage infrastructure while keeping media management familiar for non-technical administrators.`,
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
    id: "9f5cb67a-4896-4b7d-aef6-4fc93664efad",
    featured: true,
    title: "Keeper App",
    description:
      "Developed a mobile file storage app with Firebase and Room  enabling offline-first access and cloud synchronization for seamless file management.",
    longDescription: `Keeper App is an Android mobile application built around an offline-first architecture, ensuring users can access and manage their files regardless of network connectivity with seamless cloud synchronization whenever a connection is available.

**Offline-First Architecture**
The application uses Room Database (an abstraction over SQLite) as its local data store. All file metadata names, paths, folder structure, and sync status is persisted locally, enabling instant access without any network dependency. A background sync service reconciles local and cloud states when connectivity is restored.

**Cloud Storage & Authentication**
Firebase powers the cloud layer: Firebase Authentication handles secure user sign-in (email/password and Google Sign-In), while Firebase Cloud Storage manages the actual file uploads and downloads. Real-time sync listeners ensure the UI reflects the latest cloud state automatically.

**File Management Features**
Users can upload any file type (documents, images, videos, audio), organize files into custom folder hierarchies, rename and delete entries, and search across their entire file library. A file preview system renders common formats (images, PDFs, text) inline without requiring a separate app.

**Technical Implementation**
Built natively in Kotlin following the MVVM architecture pattern with Android Jetpack components (LiveData, ViewModel, Navigation Component). Coroutines handle all asynchronous operations from database queries to network requests ensuring a smooth, non-blocking UI. The sync engine uses a last-write-wins conflict resolution strategy with optimistic UI updates for perceived responsiveness.`,
    technologies: ["kotlin", "firebase", "room", "sqlite"],
    category: "Mobile Application",
    year: "2025",
    order: 2,
    imageUrl: "/images/projects/keeper-app.png",
    githubUrl: "https://github.com/ahmadrizal1st/keeper-app",
  },
  {
    id: "a7bbeaa2-1c20-4649-a9a9-c58cfcd79f08",
    featured: true,
    title: "Cadira Rental",
    description:
      "Created a Car Rental Management System in Java with MVC architecture  streamlining vehicle tracking and transaction processing.",
    longDescription: `Cadira Rental is a desktop-based Car Rental Management System developed in Java, designed to digitize and streamline the end-to-end operations of a vehicle rental business from fleet tracking to customer transactions.

**MVC Architecture**
The application strictly follows the Model-View-Controller (MVC) architectural pattern. Models represent domain entities (Vehicle, Customer, Transaction, Employee), Views are built with Java Swing for the GUI layer, and Controllers mediate business logic making the codebase maintainable and testable.

**Core Modules**
- **Fleet Management**: Add, update, and retire vehicles with details such as brand, model, year, plate number, daily rate, and availability status. Vehicles are automatically marked as unavailable during active rental periods.
- **Customer Management**: Maintain a customer database with personal details, rental history, and status tracking.
- **Transaction Processing**: Create rental agreements specifying vehicle, customer, pickup/return dates, and pricing. The system auto-calculates total costs including late return penalties.
- **Dashboard & Reports**: A summary dashboard displays key metrics active rentals, vehicles available, overdue returns, and revenue for the current period.

**Database Layer**
MySQL serves as the relational backend, with JDBC for database connectivity. Prepared statements are used throughout to prevent SQL injection. The schema enforces referential integrity through foreign key constraints, ensuring data consistency across the Vehicle, Customer, and Transaction tables.

**UI Design**
Built with Java Swing and JavaFX components, the interface uses a tabbed navigation layout with modal dialogs for data entry forms, table views for list management, and real-time status indicators for vehicle availability.`,
    technologies: ["mysql", "mvc", "javafx", "swing"],
    category: "Desktop Application",
    year: "2025",
    order: 3,
    imageUrl: "/images/projects/cardira-rental.png",
    githubUrl: "https://github.com/ahmadrizal1st/cadira-rental",
  },

  // Other projects
  {
    id: "883f52ac-65dd-4011-84ff-19e246e50cf2",
    featured: false,
    title: "Cengkrem",
    description:
      "Official website for Cengkrem - an information system featuring articles, product showcase, gallery, and contact functionality",
    longDescription: `Cengkrem is the official digital presence for a local creative business, built as a full-featured WordPress-based information system that gives the brand a professional, scalable online platform without requiring a custom development backend.

**Content Management**
The site is powered by WordPress CMS, giving non-technical administrators full control over publishing articles, updating product listings, and managing the image gallery all through a familiar dashboard. Custom post types were registered for Products and Gallery entries, separating concerns cleanly from standard blog posts.

**Core Pages & Features**
- **Home Page**: A dynamic landing page with hero section, featured products highlight, and latest articles assembled using custom Gutenberg blocks and a lightweight custom theme.
- **Articles / Blog**: A categorized content section for publishing brand stories, guides, and updates, complete with search and tag filtering.
- **Product Showcase**: A structured product catalog displaying offerings with images, descriptions, and inquiry call-to-action buttons.
- **Image Gallery**: A masonry-layout gallery with lightbox support for showcasing the business's work and events.
- **Contact Page**: An integrated contact form (built with Contact Form 7) that routes inquiries directly to the business email.

**Technical Approach**
Developed with a custom WordPress child theme for design flexibility while maintaining upgrade safety. PHP template files were customized for each page type. The site is optimized for performance with image lazy loading, minified assets, and caching. It is live and accessible at cengkrem.id.`,
    technologies: ["wordpress", "cms", "php"],
    category: "Website Application",
    year: "2024",
    order: 4,
    imageUrl: "/images/projects/cengkrem.jpeg",
    githubUrl: "https://cengkrem.id",
  },
  {
    id: "fbf28e24-dafd-4f84-94aa-ddac3c4d51ec",
    featured: false,
    title: "Wijaya Kusuma Craft",
    description:
      "Website finance dashboard for Wijaya Kusuma Craft - managing transactions, reports, and financial tracking",
    longDescription: `Wijaya Kusuma Craft Finance Dashboard is a web-based financial management system built for a local craft business to replace manual bookkeeping with a structured, digital solution that provides real-time visibility into the business's financial health.

**Problem Context**
The business previously tracked income, expenses, and inventory transactions through physical ledgers and spreadsheets, making it difficult to generate accurate reports, identify spending trends, or audit past transactions quickly.

**Core Modules**
- **Transaction Ledger**: Record income and expense transactions with categories, dates, amounts, notes, and attached receipts. Supports bulk entry and inline editing for efficiency.
- **Financial Reports**: Generate period-based profit & loss summaries, expense breakdowns by category, and income trend charts all exportable for accountant review.
- **Dashboard Overview**: A real-time summary view displaying current month revenue, expenses, net profit, and visual trend indicators giving the business owner an instant financial pulse.
- **User Authentication**: Role-based access control separating admin (full CRUD) and viewer (read-only) roles.

**Technical Stack**
Built with PHP following the MVC architectural pattern for clean separation of concerns, MySQL for relational data storage with properly normalized schemas (transactions, categories, users), and vanilla JavaScript for dynamic UI interactions such as chart rendering and inline form validation. The application runs without a framework, demonstrating proficiency in core web technologies and server-side PHP development.`,
    technologies: ["mysql", "mvc", "php", "javascript"],
    category: "Website Application",
    year: "2025",
    order: 5,
    imageUrl: "/images/projects/wijaya-kusuma-craft.jpeg",
    githubUrl: "https://github.com/ahmadrizal1st/wkc-finance-dashboard",
  },
  {
    id: "5347542c-9d93-4f95-9345-1576939ea12f",
    featured: false,
    title: "TrimUrl",
    description:
      "Engineered a full-stack URL shortener with a Go backend and React frontend  utilizing Redis caching to deliver fast, trackable redirects.",
    longDescription: `TrimUrl is a production-grade, full-stack URL shortener application that goes beyond basic link compression offering custom short codes, expiration scheduling, tagging, and redirect analytics in a clean, fast interface.

**Backend Architecture (Go)**
The API server is written in Go, chosen for its exceptional concurrency model and low latency. Each redirect request is resolved in microseconds: the short code is looked up first in Redis (in-memory cache), and only falls back to PostgreSQL on a cache miss. This two-layer lookup strategy ensures sub-millisecond redirect performance under high load.

**Key Features**
- **Custom Short Codes**: Users can define their own memorable short codes (e.g., trim.url/my-link) or let the system generate a random alphanumeric code.
- **Link Expiration**: Set optional expiry timestamps; expired links return a clean 410 Gone response with a user-friendly error page.
- **Tagging System**: Organize links with custom tags for grouping and filtering in the management dashboard.
- **Click Tracking**: Every redirect is logged with timestamp, referrer, and user-agent data, aggregated into per-link analytics accessible via the dashboard.

**Frontend (React + TypeScript + Vite)**
The React frontend provides a minimal, fast dashboard for creating, managing, and analyzing links. Built with TypeScript for full type safety and Vite for instant HMR during development. The UI updates optimistically on link creation for a snappy user experience.

**Infrastructure**
PostgreSQL persists all link metadata and analytics events. Redis caches active short code to URL mappings with a configurable TTL. The system is containerized with Docker Compose, allowing the full stack (API, frontend, PostgreSQL, Redis) to spin up with a single command.`,
    technologies: ["react", "typescript", "vite", "go", "redis", "postgres"],
    category: "Website Application",
    year: "2025",
    order: 6,
    imageUrl: "/images/projects/trimurl.png",
    githubUrl: "https://github.com/ahmadrizal1st/trimurl",
  },
  {
    id: "39c74677-1b91-4d39-881f-90f9b1b0640d",
    featured: false,
    title: "Aquafin",
    description:
      "Developed an aquaculture management system with Laravel and Docker  streamlining fish farming operations and financial tracking through a centralized admin panel.",
    longDescription: `Aquafin is a web-based information system purpose-built for managing aquaculture (fish farming) operations, combining cultivation tracking with integrated financial management into a single, unified platform.

**Domain Context**
Fish farming operations require careful tracking of multiple variables simultaneously pond cycles, feeding schedules, harvest volumes, stock purchases, and sales revenue. Aquafin centralizes this data, replacing disconnected spreadsheets and manual records with a structured, queryable system.

**Admin Panel (Filament)**
The application leverages Filament a powerful Laravel admin toolkit to rapidly deliver a feature-rich, polished admin interface. Filament's resource-based architecture maps cleanly to domain entities:
- **Cultivation Records**: Log and monitor fish pond cycles including species, stock quantity, seeding date, feeding schedule, water quality notes, and projected harvest date.
- **Harvest Management**: Record harvest volumes and weights per pond cycle, automatically computing yield vs. stock ratios for performance analysis.
- **Financial Transactions**: Track all income (sales) and expense (feed, labor, equipment) entries linked to specific cultivation cycles, enabling true cost-per-cycle profitability analysis.
- **Dashboard Widgets**: Real-time Filament widgets display active ponds, upcoming harvests, monthly revenue/expense charts, and inventory alerts.

**Technical Stack**
Built on Laravel (PHP) following repository and service patterns for clean business logic separation. MySQL stores all relational data with proper foreign key constraints across cultivation, harvest, and financial tables. The entire application is fully Dockerized a single docker-compose up launches the app, MySQL, and a Redis cache layer for session management. This ensures environment parity between development and production.`,
    technologies: ["laravel", "mysql", "filament", "docker"],
    category: "Website Application",
    year: "2025",
    order: 7,
    imageUrl: "/images/projects/aquafin.png",
    githubUrl: "https://github.com/ahmadrizal1st/aquafin",
  },
  {
    id: "6c96659d-2ea0-4a33-a96f-a014fd9b34d9",
    featured: false,
    title: "Tun8n",
    description:
      "Dockerized n8n with Ngrok integration for instant webhook exposure and custom domain support.",
    longDescription: `Tun8n is a developer-focused Docker Compose setup that solves a common pain point in automation development: exposing a locally-running n8n instance to the public internet for webhook testing without deploying to a server.

**The Problem**
n8n is a powerful self-hosted workflow automation tool, but testing webhook-triggered workflows locally requires a publicly accessible URL. Setting up a VPS, configuring DNS, and managing SSL certificates just to test a webhook is a significant overhead for development iterations.

**The Solution**
Tun8n bundles n8n with an Ngrok sidecar container in a pre-configured Docker Compose stack. On startup, Ngrok automatically establishes a secure tunnel and exposes the n8n instance on a public HTTPS URL ready for webhook testing within seconds.

**Key Capabilities**
- **Instant Public URL**: Every docker-compose up generates a live public HTTPS endpoint for your n8n instance, no server required.
- **Custom Domain Support**: For paid Ngrok accounts, the setup supports static custom domains via environment variable configuration eliminating the need to update webhook URLs on every restart.
- **Environment Variable Driven**: All configuration (Ngrok auth token, custom domain, n8n credentials) is managed through a single .env file for clean, reproducible setups.
- **Persistent Workflows**: n8n data is volume-mounted, so workflows, credentials, and execution history persist across container restarts.

**Use Case**
Ideal for developers building and testing n8n automation workflows that integrate with third-party services (Stripe, GitHub, Slack webhooks) where a live public endpoint is required for end-to-end testing in local development.`,
    technologies: ["n8n", "docker", "ngrok"],
    category: "Website Application",
    year: "2025",
    order: 8,
    imageUrl: "/images/projects/tun8n.png",
    githubUrl: "https://github.com/ahmadrizal1st/tun8n",
  },
  {
    id: "0e646b37-a7ab-4458-ba87-7049b4847cff",
    featured: false,
    title: "URL Shortener",
    description:
      "Simple URL shortener API built with Golang, PostgreSQL, and Redis for generating short links.",
    longDescription: `A focused, high-performance URL Shortener REST API built with Golang designed as a clean, well-structured backend service demonstrating proficiency in Go API development, relational database design, and caching strategies.

**API Design**
The service exposes a minimal REST API with clear resource semantics:
- POST /shorten accepts a long URL, validates it, generates a unique short code, persists it, and returns the shortened URL.
- GET /{code} resolves the short code to the original URL and issues an HTTP 301 redirect.
- GET /stats/{code} returns metadata for a given short code including creation timestamp, original URL, and redirect count.

**Performance Architecture**
Redis sits in front of PostgreSQL as a read-through cache. On every redirect request, the short code is looked up in Redis first (O(1) time complexity). On a cache hit, the redirect is served instantly. On a cache miss, the system queries PostgreSQL, caches the result in Redis with a configurable TTL, and serves the response ensuring the database is only hit for cold lookups.

**Data Layer**
PostgreSQL stores the core urls table with columns for the short code (indexed), original URL, creation timestamp, and redirect count (maintained via atomic increments). The schema is minimal and optimized for the primary read-heavy workload pattern of a URL shortener.

**Code Quality**
Structured following idiomatic Go conventions clean package organization, interface-driven dependencies for testability, and proper error handling with meaningful HTTP status codes. The project includes a docker-compose.yml for spinning up PostgreSQL and Redis dependencies locally with zero manual configuration.`,
    technologies: ["golang", "postgres", "redis"],
    category: "API",
    year: "2025",
    order: 9,
    imageUrl: "/images/projects/url-shortener.png",
    githubUrl: "https://github.com/ahmadrizal1st/url-shortener",
  },
  {
    id: "0e81adb3-c021-48ef-8d64-137acb8d0dba",
    featured: true,
    title: "Nitisaka Studio",
    description:
      "A showcase, portfolio, and template marketplace platform for Nitisaka Studio built with Astro Island Architecture, Supabase, and Cloudflare R2.",
    longDescription: `Nitisaka Studio Platform is a centralized web platform for Nitisaka Studio, combining a showcase of client works, a studio portfolio, and a template marketplace into a single, production-grade application.

**Domain & Architecture**
The platform is split across purposeful subdomains: nitisakastudio.com hosts the landing page (React + Vite), while app.nitisakastudio.com serves the main application built with Astro. Static assets and uploaded files are delivered globally via cdn.nitisakastudio.com, backed by Cloudflare R2 object storage and Cloudflare's CDN network.

**Astro Island Architecture**
The application leverages Astro's hybrid rendering model static pages (SSG) for SEO-critical content like the portfolio and store listings, and server-side rendering (SSR) for dynamic sections like the reference gallery and admin panel. Interactive UI components (upload forms, data tables, download buttons) are implemented as React Islands, hydrated only where needed for minimal JavaScript overhead.

**Core Sections**
- **Reference Gallery**: A paginated, filterable showcase of client work images served via CDN with client-side browser compression before upload to Cloudflare R2.
- **Portfolio**: A content-driven studio portfolio with individual project detail pages generated at build time from Supabase data via Drizzle ORM.
- **Template Store**: A marketplace for WordPress, Astro, and Next.js templates. Registered users can download free templates; premium templates are gated behind Midtrans / Lemon Squeezy payment (Fase 2).
- **Admin Panel**: A protected dashboard at /admin for managing all content references, portfolio entries, and store templates with presigned R2 upload URLs generated server-side.

**Auth & Security**
Authentication is handled by Supabase Auth (email/password) with sessions stored in HTTP-only cookies. Astro middleware intercepts all /admin/* routes and validates the session token before rendering, ensuring zero client-side auth bypasses. Supabase Row Level Security (RLS) enforces data access policies at the database level.

**Tech Stack**
Astro v5 + React v19 + TypeScript on the frontend, Supabase (PostgreSQL + Auth) as the backend, Drizzle ORM for type-safe queries, Cloudflare R2 + CDN for storage, and Vercel for hosting with automatic CI/CD from GitHub.`,
    technologies: [
      "astro",
      "react",
      "typescript",
      "supabase",
      "postgresql",
      "drizzle",
      "cloudflare r2",
      "tailwindcss",
    ],
    category: "Website Application",
    year: "2026",
    order: 10,
    imageUrl: "/images/projects/nitisaka.png",
    demoUrl: "https://nitisakastudio.com",
  },
];

