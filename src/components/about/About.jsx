import React from 'react'
import "./About.css"
import aboutImagen from '../../media/aboutImagen.jpg'

const About = () => {
  return (
    <div className='about-countainer'>
        <div className='about-desc'>
            <h3>Acerca de mi</h3>
            <p>Me encuentro desarrollando mi proyecto final con React.JS y PHP 
            para finalizar mis estudios como Desarrollador de Software. Desde el
            2013 formo parte del mundo de la programación mediante carreras de grados, 
            tecnicaturas, cursos y trabajos. Con ganas de seguir desarrollándome como 
            profesional y dispuesto a aprender.</p>
        </div>
        <div className='about-img'>
           <img src={aboutImagen} alt="about"/> 
        </div>
        
    </div>
  )
}

export default About