import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PageType } from "../lib/types";
import { ThemeToggle } from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  currentPage: PageType;
}

export function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems: { label: string; page: PageType; path: string }[] = [
    { label: "Home", page: "home", path: "/" },
    { label: "About", page: "about", path: "/about" },
    { label: "Experience", page: "experience", path: "/experience" },
    { label: "Certifications", page: "certification", path: "/certification" },
    { label: "Projects", page: "project", path: "/project" },
    { label: "Contact", page: "contact", path: "/contact" },
  ];

  const handleNavigate = (page: PageType) => {
    const routeMap: Record<PageType, string> = {
      splash: "/",
      home: "/",
      about: "/about",
      experience: "/experience",
      certification: "/certification",
      project: "/project",
      "project-detail": "/project",
      contact: "/contact",
    };
    navigate(routeMap[page] || "/");
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 bg-white dark:bg-black border-b-2 border-black dark:border-white"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => navigate("/")}
            className="hover:opacity-70 transition-opacity"
          >
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className="w-15 rounded-full object-cover"
              style={{ transform: "scaleX(-1)" }}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`relative py-2 transition-opacity hover:opacity-70 text-black dark:text-white ${
                  currentPage === item.page ? "font-bold" : ""
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 border-t-2 border-black dark:border-white pt-4"
          >
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                  currentPage === item.page
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
