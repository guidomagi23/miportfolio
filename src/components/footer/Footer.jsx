import React from 'react';
import "./Footer.css";
import cvguido from "../../media/cvguido.pdf";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="footer" id="contact">
        <h2>Mis Datos</h2>
        <div className="footer-info">
          <a
            className="fas fa-address-card btn"
            href={cvguido}
            target="_blank"
            rel="noopener noreferrer"
            title='Curriculum Vitae de Guido Magi'
          >
            {" "}
            <span className="btn-texto"> CURRICULUM VITAE</span>
          </a>

          <a
            className="fas fa-solid fa-file btn"
            href="https://refe.educacion.gob.ar/v/37566YKrMFRVA8IyAEl3x"
            target="_blank"
            rel="noopener noreferrer"
            title='REFE de Guido Magi'
          >
            {" "}
            <span className="btn-texto"> ReFE</span>
          </a>

          <a
            className="fa-brands fa-linkedin btn"
            href="https://www.linkedin.com/in/guidomagi/"
            target="_blank"
            rel="noopener noreferrer"
            title='Linkedin de Guido Magi'
          >
            {" "}
            <span className="btn-texto"> LINKEDIN</span>
          </a>

          <a
            className="fas fa-envelope btn"
            href="mailto:guidomagi23@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title='Correo de Guido Magi'
          >
            {" "}
            <span className="btn-texto"> GMAIL</span>
          </a>
        </div>

        <div className="design-by">
          <p>
            © Copyright 2023 - {currentYear} | All Rights Reserved | Powered by{" "}
            <a
              href="https://www.linkedin.com/in/guidomagi/"
              target="_blank"
              rel="noreferrer"
              className="sns-links-footer"
              title='Linkedin de Guido Magi'
            >
              <span style={{ lineHeight: "1.5", fontWeight: 900 }}>
                Guido Magi
              </span>
            </a>
          </p>
        </div>
      </footer>
    );
}

export default Footer;