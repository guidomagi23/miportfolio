import React from 'react'
import "./About.css"
import aboutImagen from '../../media/aboutImagen.jpg'

const About = () => {
  return (
    <div className='about-countainer'>
      <div className='about-desc'>
        <h3>Acerca de mi</h3>
        <p>Desde el 2013 formo parte del mundo IT mediante una carrera de grado, 
          una tecnicatura, diversos cursos y trabajos. Mi último proyecto lo realicé con React y PHP 
          y fue con el cual me recibí. Me gusta aprender y enseñar y estoy dispuesto a perfeccionarme 
          para poder crecer íntegramente como profesional.</p>
      </div>
      <div className='about-img'>
        <img src={aboutImagen} alt="about" />
      </div>

    </div>
  )
}

export default About