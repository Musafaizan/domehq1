import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Statssection from "./components/stats-section";
import ProductsGrid from "./components/productsgrid";
import Comingsoon from "./components/comingsoon";
import Swiftstart from "./components/swiftstart";
import About from "./components/about";
import Footer from "./components/footer";
import Journeny from "./components/journey";
import Login from "./components/login";
import Pricing from "./components/Pricing";

// Theme CSS
import "./theme.css";

// HomePage component with all sections - PUBLIC
function HomePage() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="stats"><Statssection /></section>
      <section id="products"><ProductsGrid /></section>
      <section id="coming-soon"><Comingsoon /></section>
      <section id="services"><Swiftstart /></section>
      <section id="about"><About /></section>
      <section id="journey"><Journeny /></section>
      <Footer />
    </>
  );
}

function AppContent() {
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "dark");
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  // Scroll to section when hash changes (only on homepage)
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = 80;
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }
  }, [location]);

  const showNavbar = location.pathname !== "/login";

  return (
    <>
      {showNavbar && <Navbar toggleTheme={toggleTheme} currentTheme={theme} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route 
          path="/pricing" 
          element={
            <PrivateRoute>
              <Pricing />
            </PrivateRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}