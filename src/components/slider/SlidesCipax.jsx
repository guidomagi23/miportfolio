import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    title: "Community",
    subtitle: "Red de Emprendedores",
    description:
      "Plataforma web que conecta emprendedores de diferentes rubros, facilitando networking y colaboraciones empresariales",
    technologies: ["WordPress", "PHP", "MySQL"],
    techIcons: ["fab fa-wordpress", "fab fa-php", "fas fa-database"],
    color: "#49aff7",
    gradient: "linear-gradient(135deg, #49aff7 0%, #1e40af 100%)",
    link: "https://community.phdcincubator.org/",
    demo: "https://community.phdcincubator.org/",
    icon: "fas fa-users",
  },
  {
    title: "PHDC",
    subtitle: "Corporación de Desarrollo",
    description:
      "Sitio web corporativo para la Corporación de Desarrollo Hispano de Pittsburgh, con gestión de contenido y eventos",
    technologies: ["Laravel", "PHP", "Bootstrap"],
    techIcons: ["fab fa-laravel", "fab fa-php", "fab fa-bootstrap"],
    color: "#baa182",
    gradient: "linear-gradient(135deg, #baa182 0%, #8b7355 100%)",
    link: "https://phdcincubator.org/",
    demo: "https://phdcincubator.org/",
    icon: "fas fa-building",
  },
  {
    title: "Latintech",
    subtitle: "Tecnología Latinoamericana",
    description:
      "Plataforma web para la comunidad tecnológica latina en Pittsburgh, con recursos y eventos del sector",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
    color: "#0f888f",
    gradient: "linear-gradient(135deg, #0f888f 0%, #0c6b6b 100%)",
    link: "https://latintechpgh.com/",
    demo: "https://latintechpgh.com/",
    icon: "fas fa-globe",
  },
  {
    title: "Hola Pittsburgh",
    subtitle: "Guía para Emprendedores",
    description:
      "Plataforma web que guía a nuevos emprendedores en su llegada a Pittsburgh, con recursos y conexiones locales",
    technologies: ["WordPress", "PHP", "CSS3"],
    techIcons: ["fab fa-wordpress", "fab fa-php", "fab fa-css3-alt"],
    color: "#ffb512",
    gradient: "linear-gradient(135deg, #ffb512 0%, #f59e0b 100%)",
    link: "https://holapittsburgh.com/",
    demo: "https://holapittsburgh.com/",
    icon: "fas fa-map-marked-alt",
  },
  {
    title: "Dr. Freeze",
    subtitle: "Servicios de Refrigeración",
    description:
      "Sitio web corporativo para empresa de servicios de refrigeración, con catálogo de productos y contacto",
    technologies: ["HTML", "CSS", "JavaScript"],
    techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
    color: "#7c7c7a",
    gradient: "linear-gradient(135deg, #7c7c7a 0%, #6b7280 100%)",
    link: "https://drfreezellc.com/",
    demo: "https://drfreezellc.com/",
    icon: "fas fa-snowflake",
  },
  {
    title: "ML Multilingual",
    subtitle: "Servicios de Traducción",
    description:
      "Plataforma web para empresa de servicios de traducción multilingüe, con portafolio de servicios",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    techIcons: ["fab fa-laravel", "fas fa-database", "fab fa-bootstrap"],
    color: "#df3b4a",
    gradient: "linear-gradient(135deg, #df3b4a 0%, #b91c1c 100%)",
    link: "https://www.mlmultilingualservices.com/",
    demo: "https://www.mlmultilingualservices.com/",
    icon: "fas fa-language",
  },
  {
    title: "Mezcal",
    subtitle: "Comercio Internacional",
    description:
      "Sitio web para empresa de comercio internacional de mezcal, con catálogo de productos y exportación",
    technologies: ["WordPress", "PHP", "CSS3"],
    techIcons: ["fab fa-wordpress", "fab fa-php", "fab fa-css3-alt"],
    color: "#a77f5a",
    gradient: "linear-gradient(135deg, #a77f5a 0%, #92400e 100%)",
    link: "https://monarcatradingllc.com/",
    demo: "https://monarcatradingllc.com/",
    icon: "fas fa-shipping-fast",
  },
  {
    title: "Quantum Vibe",
    subtitle: "Consultoría Tecnológica",
    description:
      "Plataforma web para empresa de consultoría tecnológica, con servicios especializados y casos de estudio",
    technologies: ["Laravel", "MySQL", "JavaScript"],
    techIcons: ["fab fa-laravel", "fas fa-database", "fab fa-js-square"],
    color: "#165788",
    gradient: "linear-gradient(135deg, #165788 0%, #1e3a8a 100%)",
    link: "https://www.quantumvibellc.net/",
    demo: "https://www.quantumvibellc.net/",
    icon: "fas fa-atom",
  },
  {
    title: "San Constructions",
    subtitle: "Construcción y Remodelación",
    description:
      "Sitio web corporativo para empresa de construcción y remodelación, con galería de proyectos y servicios",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
    color: "#919095",
    gradient: "linear-gradient(135deg, #919095 0%, #6b7280 100%)",
    link: "https://sanconstructionsllc.com/",
    demo: "https://sanconstructionsllc.com/",
    icon: "fas fa-hammer",
  },
  {
    title: "Tasty Taquitos",
    subtitle: "Restaurante Mexicano",
    description:
      "Sitio web para restaurante de comida mexicana, con menú digital, ubicación y pedidos en línea",
    technologies: ["WordPress", "PHP", "Bootstrap"],
    techIcons: ["fab fa-wordpress", "fab fa-php", "fab fa-bootstrap"],
    color: "#006749",
    gradient: "linear-gradient(135deg, #006749 0%, #047857 100%)",
    link: "https://tastytaquitos.com/",
    demo: "https://tastytaquitos.com/",
    icon: "fas fa-utensils",
  },
];

const SlidesCipax = slidesInfo.map((project, index) => (
  <div key={index} className="project-card-professional">
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
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link website"
            title="Ver sitio web"
          >
            <i className="fas fa-external-link-alt"></i>
            <span>Sitio Web</span>
          </a>
        </div>
      </div>
    </div>
  </div>
));

export default SlidesCipax;
