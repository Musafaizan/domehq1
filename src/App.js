import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

 import './theme.css'; 
import Hero from './components/hero';
import Statssection from './components/stats-section';  
import ProductsGrid from './components/productsgrid';
import Comingsoon from './components/comingsoon';
import Swiftstart from './components/swiftstart';   
import About from './components/about';
import Footer from './components/footer'; 
import Journeny from './components/journey'; 


export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

      <section id="hero">
        <Hero />
      </section>

      <section id="stats">
        <Statssection />
      </section>

      <section id="products">
        <ProductsGrid />
      </section>

      <section id="coming-soon">
        <Comingsoon />
      </section>

      <section id="services">
        <Swiftstart />
      </section>

      <section id="about">
        <About />
      </section>

        <section id="footer">
          <Footer />
        </section>

      <section id="journeny">
        <Journeny />
      </section>

    </>
  );
}
