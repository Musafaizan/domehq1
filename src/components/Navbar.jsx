import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaMoon, FaSun, FaGlobe, FaChevronDown } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar({ toggleTheme, currentTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Debug: Log user info
  useEffect(() => {
    if (currentUser) {
      console.log("Current User:", currentUser);
      console.log("Photo URL:", currentUser.photoURL);
      console.log("Display Name:", currentUser.displayName);
      console.log("Email:", currentUser.email);
    }
  }, [currentUser]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to handle section navigation
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = 80;
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }
  };

  // Handle pricing click
  const handlePricingClick = (e) => {
    e.preventDefault();
    navigate("/pricing");
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  // Get profile picture URL
  const getProfilePicture = () => {
    if (currentUser?.photoURL) {
      return currentUser.photoURL;
    }
    // Fallback avatar with user's email initial
    const initial = currentUser?.email?.charAt(0).toUpperCase() || 'U';
    return `https://ui-avatars.com/api/?name=${initial}&background=ff0000&color=fff&size=128`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo" onClick={() => navigate("/")}>
          <img className="img" src={logo} alt="logo" />
          <span className="logo-text">DOME</span>
        </div>
      </div>

      <ul className="navbar-menu">
        <li>
          <a href="#products" onClick={(e) => handleSectionClick(e, "products")}>
            Products
          </a>
        </li>
        <li>
          <a href="#coming-soon" onClick={(e) => handleSectionClick(e, "coming-soon")}>
            Coming Soon
          </a>
        </li>
        <li>
          <a href="#services" onClick={(e) => handleSectionClick(e, "services")}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleSectionClick(e, "about")}>
            About Us
          </a>
        </li>
        
        {/* Only show Pricing when logged in */}
        {currentUser && (
          <li>
            <a href="#pricing" onClick={handlePricingClick}>
              Pricing
            </a>
          </li>
        )}
      </ul>

      <div className="navbar-right">
        <div className="icons">
          <span className="icon-theme" onClick={toggleTheme}>
            {currentTheme === "dark" ? <FaMoon /> : <FaSun />}
          </span>

          <span className="icon-globe">
            <FaGlobe />
          </span>
        </div>

        {currentUser ? (
          <div className="user-profile" ref={dropdownRef}>
            <div 
              className="profile-trigger" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img 
                src={getProfilePicture()}
                alt="Profile" 
                className="profile-pic"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.email)}&background=ff0000&color=fff&size=128`;
                }}
              />
              <span className="profile-name">
                {currentUser.displayName || currentUser.email.split('@')[0]}
              </span>
              <FaChevronDown className="dropdown-icon" />
            </div>

            {showDropdown && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <img 
                    src={getProfilePicture()}
                    alt="Profile" 
                    className="dropdown-profile-pic"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.email)}&background=ff0000&color=fff&size=128`;
                    }}
                  />
                  <div className="dropdown-info">
                    <p className="dropdown-name">
                      {currentUser.displayName || 'User'}
                    </p>
                    <p className="dropdown-email">{currentUser.email}</p>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <button className="logout-btn" onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="get-started-btn">
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;