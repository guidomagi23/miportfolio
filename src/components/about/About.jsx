import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import "./About-responsive.css";
import aboutImagen from "../../media/GM-Linke.jpg";

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
    {
      category: "Lenguajes y Tecnologías",
      items: [
        { name: "Laravel", level: "Intermedio" },
        { name: "JavaScript", level: "Intermedio" },
        { name: "PHP", level: "Intermedio" },
        { name: "React", level: "Intermedio" },
        { name: "Java", level: "Intermedio" },
        { name: "MySQL", level: "Avanzado" },
        { name: "HTML/CSS", level: "Intermedio" },
        { name: "Bootstrap", level: "Intermedio" },
        { name: "Angular", level: "Básico" },
        { name: "Python", level: "Intermedio" },
        { name: "Django", level: "Intermedio" },
        { name: "Django REST Framework", level: "Intermedio" },
        { name: "CakePHP3", level: "Básico" },
        { name: "Android", level: "Básico" },
        { name: "C++", level: "Básico" },
      ],
    },
    {
      category: "Herramientas y Entornos",
      items: [
        { name: "Git/GitHub", level: "Intermedio" },
        { name: "GitLab", level: "Intermedio" },
        { name: "Docker", level: "Intermedio" },
        { name: "Jira", level: "Intermedio" },
        { name: "Bitbucket", level: "Intermedio" },
        { name: "ClickUp", level: "Intermedio" },
        { name: "Slack", level: "Intermedio" },
        { name: "CPanel", level: "Intermedio" },
        { name: "IBExpert", level: "Intermedio" },
      ],
    },
    {
      category: "CMS y Plataformas",
      items: [
        { name: "WordPress", level: "Avanzado" },
        { name: "Avada Theme", level: "Avanzado" },
        { name: "Bagisto", level: "Intermedio" },
      ],
    },
    {
      category: "Metodologías y Conceptos",
      items: [
        { name: "SCRUM", level: "Intermedio" },
        { name: "SEO", level: "Intermedio" },
        { name: "API Integration", level: "Intermedio" },
        { name: "Google Analytics", level: "Intermedio" },
        { name: "Search Console", level: "Intermedio" },
      ],
    },
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
          <div className="about-main">
            <div className="about-text">
              <div className="about-intro">
                <p className="intro-text">
                  Soy{" "}
                  <strong>Técnico Superior en Desarrollo de Software</strong>{" "}
                  con más de 4 años de experiencia profesional trabajando en
                  empresas desarrollando soluciones, aplicaciones y sistemas.
                </p>
              </div>

              <div className="about-description">
                <p>
                  Mi experiencia como <strong>Desarrollador Fullstack</strong>{" "}
                  incluye desarrollo y personalización de plataformas e-commerce
                  con <strong>Laravel Bagisto</strong>, integración de{" "}
                  <strong>APIs externas</strong>, trabajo con{" "}
                  <strong>MySQL</strong> y <strong>Docker</strong>, y gestión de
                  código con <strong>GitLab</strong>. También tengo experiencia
                  en frontends con <strong>Angular</strong> y desarrollo de APIs
                  con <strong>Python/Django</strong>.
                </p>
                <p>
                  Trabajo con <strong>metodologías ágiles (SCRUM)</strong>,
                  <strong> Google Analytics</strong>,{" "}
                  <strong>Search Console</strong> y herramientas como{" "}
                  <strong>GitLab/GitHub</strong>, <strong>Jira</strong>,{" "}
                  <strong>Docker</strong> y <strong>Bitbucket</strong>.
                </p>
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

          <div className="skills-section skills-section--full">
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
                      <span
                        key={skill.name}
                        className={`skill-tag ${skill.level.toLowerCase()}`}
                        title={`${skill.name} - ${skill.level}`}
                      >
                        {skill.name}
                        <span className="skill-level-badge">{skill.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3>Experiencia Laboral</h3>
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="experience-period">Nov 2025 - Mar 2026</div>
                <div className="experience-content">
                  <h4>KOZACA - Desarrollador Fullstack Ssr</h4>
                  <ul className="experience-list">
                    <li>
                      Desarrollo de aplicaciones web full-stack con Django REST
                      Framework, Angular y CakePHP3.
                    </li>
                    <li>Python para desarrollo backend con Django.</li>
                    <li>Gestión de código con GitLab.</li>
                    <li>Base de datos MySQL.</li>
                    <li>Docker.</li>
                  </ul>
                </div>
              </div>
              <div className="experience-item">
                <div className="experience-period">Jul 2025 - Nov 2025</div>
                <div className="experience-content">
                  <h4>APPLICA SOLUTIONS - Desarrollador Fullstack</h4>
                  <ul className="experience-list">
                    <li>
                      Desarrollo y personalización de plataformas e-commerce con
                      Laravel Bagisto.
                    </li>
                    <li>Implementación de extensiones y módulos.</li>
                    <li>Integración de multilenguaje y optimización SEO.</li>
                    <li>Manejo de base de datos MySQL.</li>
                    <li>Control de versiones con Git/GitHub y Docker.</li>
                    <li>Consumo e integración de APIs externas.</li>
                  </ul>
                </div>
              </div>
              <div className="experience-item">
                <div className="experience-period">Jul 2023 - Dic 2024</div>
                <div className="experience-content">
                  <h4>CIPAX - Desarrollador de Software</h4>
                  <p>
                    Desarrollo web con Laravel, WordPress, HTML, CSS y
                    Bootstrap. Integración de APIs, consultas con Eloquent,
                    estrategias de SEO con Google Analytics y metodologías
                    ágiles SCRUM.
                  </p>
                </div>
              </div>
              <div className="experience-item">
                <div className="experience-period">Mar 2020 - Ene 2022</div>
                <div className="experience-content">
                  <h4>Grupo Guadalupe S.R.L - Desarrollador de Software</h4>
                  <p>
                    Desarrollo de sistemas desktop con Delphi y Firebird,
                    creación de consultas SQL y mantenimiento de sistemas
                    empresariales.
                  </p>
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
