import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar({ toggleTheme, currentTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img className="img" src={logo} alt="logo" />
          <span className="logo-text">DOME</span>
        </div>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link to="products" smooth={true} duration={600} offset={-80}>
            Products
          </Link>
        </li>
        <li>
          <Link to="coming-soon" smooth={true} duration={600} offset={-80}>
            Coming Soon
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={600} offset={-80}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={600} offset={-80}>
            About Us
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="icons">
          <span className="icon-theme" onClick={toggleTheme}>
            {currentTheme === 'dark' ? <FaMoon /> : <FaSun />}
          </span>
          <span className="icon-globe">
            <FaGlobe />
          </span>
        </div>
        <button className="get-started-btn">
          <Link to="hero" smooth={true} duration={600}>
            Get Started
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
