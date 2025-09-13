import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import cvguido from "../../media/cvguido.pdf";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <footer className="footer" id="contact" ref={sectionRef}>
      <div className="footer-container">
        {/* Header Section */}
        <div className="footer-header">
          <div className="section-badge">
            <i className="fas fa-envelope"></i>
            <span>Contacto</span>
          </div>
          <h2 className="footer-title">
            ¡Conectemos y creemos{" "}
            <span className="gradient-text"> algo increíble</span>!
          </h2>
        </div>

        {/* Contact Actions */}
        <div className={`footer-actions ${isVisible ? "visible" : ""}`}>
          <div className="contact-grid">
            <a
              href={cvguido}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card cv"
              title="Descargar Curriculum Vitae"
            >
              <div className="contact-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="contact-info">
                <h3>Curriculum Vitae</h3>
                <p>Descargar mi CV completo</p>
              </div>
              <div className="contact-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>

            <a
              href="https://refe.educacion.gob.ar/v/37566YKrMFRVA8IyAEl3x"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card refe"
              title="Ver ReFE - Registro Federal de Estudiantes"
            >
              <div className="contact-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="contact-info">
                <h3>ReFE</h3>
                <p>Registro Federal de Estudiantes</p>
              </div>
              <div className="contact-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/guidomagi/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card linkedin"
              title="Conectar en LinkedIn"
            >
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Conectar profesionalmente</p>
              </div>
              <div className="contact-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>

            <a
              href="mailto:guidomagi23@gmail.com"
              className="contact-card email"
              title="Enviar email"
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>guidomagi23@gmail.com</p>
              </div>
              <div className="contact-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © 2019 - {currentYear} | Todos los derechos reservados | Guido Magi
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
