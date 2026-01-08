import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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

// Theme CSS
import "./theme.css";

// HomePage component with all sections
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

export default function App() {
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
        // Scroll with offset so section isn't at the very top
        const navbarHeight = 80; // Adjust this to your navbar height
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

      <Routes>
        {/* Main homepage with all sections */}
        <Route path="/" element={<HomePage />} />

        {/* Separate login page - only login component, no other sections */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}