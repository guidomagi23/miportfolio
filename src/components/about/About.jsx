import React from 'react'
import "./About.css"
import aboutImagen from '../../media/aboutImagen.jpg'

const About = () => {
  return (
    <div className='about-countainer' id="about">
      <div className='about-desc'>
        <h1>Acerca de</h1>
        <p>Desarrollador Full Stack con experiencia en desarrollo de aplicaciones web y sistemas de software, especializado en Laravel, JavaScript, MySQL y WordPress. Hábil en estrategias de SEO, integración de APIs, metodologías ágiles (SCRUM) y herramientas como Git, Jira, CPanel, Google Analytics y Search Console.
    Comprometido con el aprendizaje continuo y la resolución eficiente de problemas, aportando soluciones robustas y escalables.
 </p>
      </div>
      <div className='about-img'>
        <img src={aboutImagen} alt="about"/>
      </div>

    </div>
  )
}

export default About