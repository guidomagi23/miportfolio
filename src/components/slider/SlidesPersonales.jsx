import React from "react";
import "./Slider.css";
import "./Slider-responsive.css";

const slidesInfo = [
  {
    title: "Lucio Magi",
    subtitle: "DJ & Productor Musical",
    description:
      "Página web personal para DJ y productor musical con diseño moderno y portfolio de trabajos",
    technologies: ["HTML", "CSS", "JavaScript"],
    techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    link: "https://github.com/guidomagi23/luciomagi",
    demo: "https://luciomagi.github.io/luciomagi/",
    icon: "fas fa-music",
  },
  {
    title: "Mi Portfolio",
    subtitle: "React.js Developer",
    description:
      "Portfolio personal desarrollado con React.js, mostrando proyectos y habilidades técnicas",
    technologies: ["React", "JavaScript", "CSS3"],
    techIcons: ["fab fa-react", "fab fa-js-square", "fab fa-css3-alt"],
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    link: "https://github.com/guidomagi23/miportfolio",
    demo: "https://guidomagi23.github.io/miportfolio/",
    icon: "fas fa-laptop-code",
  },
  {
    title: "BIES 2022",
    subtitle: "Sistema de Gestión v2.0",
    description:
      "Sistema completo de gestión para eventos estudiantiles con funcionalidades avanzadas",
    technologies: ["PHP", "MySQL", "JavaScript"],
    techIcons: ["fab fa-php", "fas fa-database", "fab fa-js-square"],
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
    link: "https://github.com/guidomagi23/Bies22",
    demo: "https://github.com/guidomagi23/Bies22",
    icon: "fas fa-calendar-alt",
  },
  {
    title: "BIES 2020",
    subtitle: "Sistema de Gestión v1.0",
    description:
      "Primera versión del sistema de gestión para eventos estudiantiles de la universidad",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    techIcons: ["fab fa-php", "fas fa-database", "fab fa-bootstrap"],
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    link: "https://github.com/guidomagi23/Bies20",
    demo: "https://github.com/guidomagi23/Bies20",
    icon: "fas fa-graduation-cap",
  },
  {
    title: "Noties",
    subtitle: "Aplicación de Notas",
    description:
      "Aplicación web para gestión de notas personales con interfaz intuitiva y funcionalidades modernas",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    techIcons: ["fab fa-js-square", "fab fa-html5", "fab fa-css3-alt"],
    color: "#ea580c",
    gradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    link: "https://github.com/guidomagi23/Noties",
    demo: "https://github.com/guidomagi23/Noties",
    icon: "fas fa-sticky-note",
  },
];

const SlidesPersonales = slidesInfo.map((project, index) => (
  <div key={index} className="project-card-personal">
    <div
      className="project-card-background"
      style={{ background: project.gradient }}
    >
      <div className="project-card-content">
        {/* Header con icono y título */}
        <div className="project-header">
          <div className="project-icon">
            <i className={project.icon}></i>
          </div>
          <div className="project-titles">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
        </div>

        {/* Descripción */}
        <div className="project-description">
          <p>{project.description}</p>
        </div>

        {/* Tecnologías */}
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <div key={techIndex} className="tech-tag">
              <i className={project.techIcons[techIndex]}></i>
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Enlaces */}
        <div className="project-links">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-link demo"
            title="Ver"
          >
            <i className="fas fa-external-link-alt"></i>
            <span>Info</span>
          </a>
        </div>
      </div>
    </div>
  </div>
));

export default SlidesPersonales;
