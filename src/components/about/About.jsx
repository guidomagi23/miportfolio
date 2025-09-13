import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImagen from "../../media/aboutImagen.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const skills = [
    { category: "Frontend", items: ["JavaScript", "React", "CSS3", "HTML5"] },
    { category: "Backend", items: ["Laravel", "PHP", "Java", "MySQL"] },
    {
      category: "CMS",
      items: ["WordPress", "Custom Themes", "Plugin Development"],
    },
    { category: "Tools", items: ["Git", "Jira", "Google Analytics", "CPanel"] },
    { category: "Metodologías", items: ["SCRUM", "SEO", "API Integration"] },
  ];

  const achievements = [
    { number: "3+", label: "Años de Experiencia" },
    { number: "15+", label: "Proyectos Completados" },
    { number: "100%", label: "Satisfacción Cliente" },
    { number: "24/7", label: "Soporte Disponible" },
  ];

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-user"></i>
            <span>Acerca de mí</span>
          </div>
          <h2 className="section-title">
            Conoce más sobre mi{" "}
            <span className="gradient-text">experiencia</span>
          </h2>
        </div>

        <div className={`about-content ${isVisible ? "visible" : ""}`}>
          <div className="about-text">
            <div className="about-intro">
              <p className="intro-text">
                Soy un <strong>desarrollador de software apasionado</strong> con
                más de 3 años de experiencia creando soluciones web innovadoras
                y sistemas robustos que impulsan el crecimiento empresarial.
              </p>
            </div>

            <div className="about-description">
              <p>
                Mi especialización se centra en el desarrollo full-stack con{" "}
                <strong>Laravel</strong>,<strong> JavaScript</strong> y{" "}
                <strong>MySQL</strong>, complementado con expertise en
                <strong> WordPress</strong> para soluciones CMS personalizadas.
              </p>
              <p>
                Tengo sólidos conocimientos en <strong>SEO</strong>, integración
                de <strong>APIs</strong>, y trabajo con metodologías ágiles como{" "}
                <strong>SCRUM</strong>. Manejo herramientas profesionales como
                Git, Jira, CPanel, Google Analytics y Search Console.
              </p>
            </div>

            <div className="skills-section">
              <h3>Habilidades Técnicas</h3>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <div
                    key={skillGroup.category}
                    className="skill-category"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4>{skillGroup.category}</h4>
                    <div className="skill-items">
                      {skillGroup.items.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="achievements-section">
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.label}
                    className="achievement-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="achievement-number">
                      {achievement.number}
                    </div>
                    <div className="achievement-label">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="image-container">
              <div className="image-frame">
                <img
                  src={aboutImagen}
                  alt="Guido Magi - Desarrollador de Software"
                  title="Guido Magi - Desarrollador de Software"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-code"></i>
                    <span>Desarrollando el futuro</span>
                  </div>
                </div>
              </div>

              <div className="floating-icons">
                <div className="tech-icon icon-1">
                  <i className="fab fa-laravel"></i>
                </div>
                <div className="tech-icon icon-2">
                  <i className="fab fa-js-square"></i>
                </div>
                <div className="tech-icon icon-3">
                  <i className="fas fa-database"></i>
                </div>
                <div className="tech-icon icon-4">
                  <i className="fab fa-wordpress"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
