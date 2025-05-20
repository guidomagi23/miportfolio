import React from 'react'
import "./About.css"
import aboutImagen from '../../media/aboutImagen.jpg'

const About = () => {
  return (
    <div className="about-countainer" id="about">
      <div className="about-desc">
        <h2>Acerca de</h2>
        <p>
          Desarrollador Full Stack con experiencia en aplicaciones web y
          sistemas de software. Especializado en Laravel, JavaScript, MySQL y
          WordPress. Con conocimientos en SEO, integración de APIs, metodologías
          ágiles (SCRUM) y herramientas como Git, Jira, CPanel, Google Analytics
          y Search Console. Comprometido con el aprendizaje continuo.
        </p>
      </div>
      <div className="about-img">
        <img title="Guido Magi" src={aboutImagen} alt="about" />
      </div>
    </div>
  );
}

export default About