import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar ${isScrolling > 20 ? "scrolling" : ""} ${
          isMenuOpen ? "menu-open" : ""
        }`}
      >
        <div className="navbar-container">
          <div className="navbar-logo" onClick={toTheTop}>
            <div className="logo-icon">
              <i className="fas fa-code"></i>
            </div>
            <span className="logo-text">GM</span>
          </div>

          <div className="navbar-menu-desktop">
            <ul className="navbar-links">
              <li
                className={activeSection === "about" ? "active" : ""}
                onClick={() => scrollToSection("about")}
              >
                <span className="link-text">Acerca de</span>
                <div className="link-underline"></div>
              </li>
              <li
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => scrollToSection("projects")}
              >
                <span className="link-text">Proyectos</span>
                <div className="link-underline"></div>
              </li>
              <li
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => scrollToSection("contact")}
              >
                <span className="link-text">Contacto</span>
                <div className="link-underline"></div>
              </li>
            </ul>
          </div>

          <div
            className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <div className="mobile-logo" onClick={toTheTop}>
              <div className="logo-icon">
                <i className="fas fa-code"></i>
              </div>
              <span className="logo-text">Guido Magi</span>
            </div>
          </div>
          <ul className="mobile-links">
            <li onClick={() => scrollToSection("about")}>
              <i className="fas fa-user"></i>
              <span>Acerca de</span>
            </li>
            <li onClick={() => scrollToSection("projects")}>
              <i className="fas fa-briefcase"></i>
              <span>Proyectos</span>
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <i className="fas fa-envelope"></i>
              <span>Contacto</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
