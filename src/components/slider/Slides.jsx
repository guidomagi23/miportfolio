import React from "react";
import "./Slider.css";
import notiesImagen from "../../media/notiesImagen.png";
import biesImagen2020 from "../../media/biesImagen2020.png";
import biesImagen2021 from "../../media/biesImagen2021.png";
import portfolioImagen from "../../media/portfolioImagen.png";
import biesVideo2020 from "../../media/biesVideo2020.mp4";
import notiesVideo from "../../media/notiesVideo.mp4";


const slidesInfo = [
    {
        img: biesImagen2021,
        alt: "Bies 2022",
        desc: "Versión 2.0",
        link: "https://github.com/guidomagi23/Bies22",
        video: ""
    },
    {
        img: biesImagen2020,
        alt: "Bies 2020",
        desc: "Versión 1.0",
        link: "https://github.com/guidomagi23/Bies20",
        video: biesVideo2020
    },
    {
        img: notiesImagen,
        alt: "Noties",
        desc: "Versión 1.0",
        link: "https://github.com/guidomagi23/Noties",
        video: notiesVideo
    },
    {
        img: portfolioImagen,
        alt: "Portfolio",
        desc: " React.JS",
        link: "https://github.com/guidomagi23/miportfolio",
        video: "https://guidomagi23.github.io/miportfolio/"
    }

]

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <a className="img" href={slide.video}><img src={slide.img} alt=""/> </a>             
        <div className="slide-desc">
            <span>{slide.alt}</span>
            <a className="slide-link" href={slide.link} target="_blank" rel='noreferrer'>
                <i className='fab fa-github github'></i>
            </a>
            <a className="slide-video" href={slide.video}  rel='noreferrer'>
                <i className='fab fa-solid fa-film film'></i>
            </a>
        </div>
    </div>


));

export default slides;