import React from 'react'
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import "./Slider.css"
import SlidesPersonales from './SlidesPersonales'
import SlidesCipax from './SlidesCipax'

const Slider = () => {
  return (
    <div className='carousel-container' id="projects">
      <div className='carousel-title'>
        <h2>Mis Proyectos</h2>
        <h3>Junto a Cipax: 2023-2024</h3>
        <p>Trabajé en proyectos increíbles como parte de un equipo talentoso en <a href="https://cipax.dev/" target="_blank" rel="noreferrer">Cipax.dev</a>, desarrollando soluciones que priorizan la innovación y los resultados efectivos. Implementé aplicaciones web completas utilizando Laravel, WordPress, HTML, CSS, Bootstrap y Git, integrando APIs, optimizando bases de datos con Eloquent, y mejorando el rendimiento y la visibilidad en línea mediante estrategias de SEO, Google Analytics y metodologías ágiles como SCRUM. </p>
      </div>
      <Carousel
        arrows
        slidesPerPage={1}
        slidesPerScroll={1}
        infinite
        animationSpeed={200}
        centered={false}
        offset={50}
        itemWidth={430}
        slides={SlidesCipax}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: true,
            itemWidth: 200,
          }
        }}

      />

      <div className='carousel-title'>
        <h3>Personales: 2019-2022</h3>
        <p>Durante mis estudios, desarrollé proyectos personales que me permitieron explorar y consolidar mis habilidades en diversas tecnologías. Creé aplicaciones y soluciones utilizando PhoneGap, JavaScript, HTML, CSS y PHP, integrando bases de datos MySQL. También experimenté con el desarrollo móvil nativo en Android Studio y construí interfaces dinámicas con React, combinando diseño y funcionalidades.</p>
      </div>

      <Carousel
        arrows
        slidesPerPage={1}
        slidesPerScroll={1}
        infinite
        animationSpeed={200}
        centered={false}
        offset={50}
        itemWidth={400}
        slides={SlidesPersonales}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: true,
            itemWidth: 200,
          }
        }}

      />
    </div>
  )
}

export default Slider