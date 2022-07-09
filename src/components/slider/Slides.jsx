import React from "react";
import "./Slider.css";
import notiesImagen from "../../media/notiesImagen.png";
import biesImagen2020 from "../../media/biesImagen2020.png";
import biesImagen2021 from "../../media/biesImagen2021.png";
import portfolioImagen from "../../media/portfolioImagen.png";

const slidesInfo = [
    {
        img: biesImagen2021,
        alt: "Bies 2021",
        desc: "Versión 2.0"
    },
    {
        img: biesImagen2020,
        alt: "Bies 2020",
        desc: "Versión 1.0"
    },
    {
        img: notiesImagen,
        alt: "Noties",
        desc: "Versión 1.0"
    },
    {
        img: portfolioImagen,
        alt: "Portfolio",
        desc: " React.JS"
    }

]

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.img} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.alt}</span>
            <p>{slide.desc}</p>
        </div>
    </div>


));

export default slides;