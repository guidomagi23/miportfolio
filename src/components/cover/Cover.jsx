import React, { useEffect, useState } from "react";
import "../cover/Cover.css";
import cvguido from "../../media/cvguido.pdf";

const Cover = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const technologies = [
    { name: "Laravel", icon: "fab fa-laravel" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "React", icon: "fab fa-react" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "WordPress", icon: "fab fa-wordpress" },
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Java", icon: "fab fa-java" },
  ];

  return (
    <div className="cover-container">
      
      <div className="cover-overlay"></div>

      <div className="cover-content">
        <div className={`hero-text ${isVisible ? "visible" : ""}`}>
          <div className="greeting">
            <span className="wave">👋</span>
            <span>Hola, soy</span>
          </div>

          <h1 className="hero-name">
            <span className="name-part">Guido</span>
            <span className="name-part">Magi</span>
          </h1>

          <h2 className="hero-title">
            <span className="typing-text">Desarrollador de Software</span>
          </h2>

          <p className="hero-description">
            Desarrollador Fullstack especializado en <strong>Laravel</strong>,{" "}
            <strong>JavaScript</strong> y <strong>MySQL</strong>. Con
            experiencia en <strong>WordPress</strong>, <strong>React</strong> y
            metodologías ágiles como <strong>SCRUM</strong>. Comprometido con el
            aprendizaje continuo.
          </p>

          <div className="tech-stack">
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="tech-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  title={tech.name}
                >
                  <i className={tech.icon}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <button className="cta-button primary" onClick={scrollToAbout}>
              <span>Conoce más</span>
              <i className="fas fa-arrow-down"></i>
            </button>

            <button
              className="cta-button secondary"
              onClick={() => window.open(cvguido, "_blank")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i>
              <span>Descargar CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
    </div>
  );
};

export default Cover;
