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
import { SplashPage } from "../pages/SplashPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { CertificationPage } from "../pages/CertificationPage";
import { ProjectPage } from "../pages/ProjectPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ContactPage } from "../pages/ContactPage";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import TetrisLoading from "../components/ui/tetris-loader";

function AppContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [_isProgrammaticNavigation, setIsProgrammaticNavigation] =
    useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user has visited before
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowSplash(false);
    }
  }, []);

  // Handle loading on route changes
  useEffect(() => {
    if (!isLoading && !isFirstLoad) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, [location.pathname]);

  const handleSplashComplete = () => {
    setIsLoading(true);
    setIsProgrammaticNavigation(true);
    setTimeout(() => {
      setShowSplash(false);
      navigate("/");
      setIsLoading(false);
    }, 2000);
  };

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
    return "home";
  };

  const currentPage = getCurrentPage();

  // Show splash page
  if (showSplash) {
    return <SplashPage onComplete={handleSplashComplete} />;
  }

  // Show loading state
  if (isLoading) {
    return <TetrisLoading />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
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
