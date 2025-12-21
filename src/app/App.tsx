import { useState, useEffect } from "react";
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("splash");
  const [projectId, setProjectId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Check if user has visited before
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowSplash(false);
      setCurrentPage("home");
    }
  }, []);

  const handleNavigate = (page: PageType, id?: string) => {
    // Show loading for route transitions
    setIsLoading(true);

    // Scroll to top
    window.scrollTo(0, 0);

    setTimeout(() => {
      setCurrentPage(page);
      if (id) {
        setProjectId(id);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSplashComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowSplash(false);
      setCurrentPage("home");
      setIsLoading(false);
    }, 2000);
  };

  // Show splash page
  if (showSplash) {
    return <SplashPage onComplete={handleSplashComplete} />;
  }

  // Show loading state
  if (isLoading) {
    return <TetrisLoading />;
  }

  // Render current page with layout
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "experience":
        return <ExperiencePage />;
      case "certification":
        return <CertificationPage />;
      case "project":
        return <ProjectPage onNavigate={handleNavigate} />;
      case "project-detail":
        return (
          <ProjectDetailPage
            projectId={projectId}
            onNavigate={handleNavigate}
          />
        );
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </ThemeProvider>
  );
}
