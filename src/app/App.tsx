import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { PageType } from "../lib/types";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { CertificationPage } from "../pages/CertificationPage";
import { ProjectPage } from "../pages/ProjectPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ContactPage } from "../pages/ContactPage";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import NotFoundPage from "../components/ui/page-not-found";

function AppContent() {
  const location = useLocation();

  // Get current page from location
  const getCurrentPage = (): PageType => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/about") return "about";
    if (path === "/experience") return "experience";
    if (path === "/certification") return "certification";
    if (path === "/project") return "project";
    if (path.startsWith("/project/")) return "project-detail";
    if (path === "/contact") return "contact";
    return "home"; // Default to home for 404
  };

  const currentPage = getCurrentPage();

  return (
    <div
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white"
      style={{ cursor: 'url("/cursor/cursor.ico") 0 0, auto' }}
    >
      <Header currentPage={currentPage} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
