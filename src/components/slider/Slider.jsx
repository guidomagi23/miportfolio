import React from 'react'
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from './Slides'
import "./Slider.css"

const Slider = () => {
  return (
    <div className='carousel-container' id="projects">
      <div className='carousel-tittle'>
        <h1>Mis Proyectos</h1>
      </div>
      <Carousel
        arrows
        slidesPerPage={2}
        slidesPerScroll={2}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: true,
            itemWidth: 250,
          }
        }}

      />
    </div>
  )
}

export default Slider