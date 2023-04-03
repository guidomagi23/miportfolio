import React from 'react'
import "./About.css"
import aboutImagen from '../../media/aboutImagen.jpg'

const About = () => {
  return (
    <div className='about-countainer'>
      <div className='about-desc'>
        <h3>Acerca de mi</h3>
        <p>Es un placer presentarme como un desarrollador de software. Durante mi carrera, he tenido la
oportunidad de trabajar en varios proyectos, lo que me ha brindado una formación académica sólida,
tanto en una carrera de grado como en una tecnicatura, y también he continuado mi educación a
través de cursos y trabajos en diversos ámbitos.
 En particular, me he enfocado en el desarrollo de aplicaciones web utilizando React y PHP, y mi
último proyecto, en el que trabajé como parte de mi tesis de grado, se centró en estas tecnologías.
Como resultado, he obtenido conocimientos avanzados y habilidades técnicas en su uso. Además, me
considero un apasionado por aprender y enseñar, y siempre estoy dispuesto a perfeccionarme y
mejorar mis habilidades.
 </p>
      </div>
      <div className='about-img'>
        <img src={aboutImagen} alt="about" />
      </div>

    </div>
  )
}

export default About