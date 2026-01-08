import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar({ toggleTheme, currentTheme }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle section navigation
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      // If we're already on homepage, just scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = 80; // Adjust to your navbar height
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }
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

        {/* Link to login - opens only login page */}
        <Link to="/login" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;