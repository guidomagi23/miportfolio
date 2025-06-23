import React from "react";
import "./Slider.css";
import communityImagen from "../../media/community.jpg";
import DrfreezeImagen from "../../media/Drfreeze.jpg";
import holapittImagen from "../../media/holapitt.jpg";
import MLImagen from "../../media/ML.jpg";
import phdcImagen from "../../media/phdc.jpg";
import quatumImagen from "../../media/quatum.jpg";
import sanconsImagen from "../../media/sancons.jpg";
import tastyImagen from "../../media/tasty.jpg";
import latintechImagen from "../../media/latintech.jpg";
import mezcalImagen from "../../media/mezcal.jpg";

const slidesInfo = [
  {
    img: communityImagen,
    alt: "Página web en donde se encuentran emprendedores de diferentes rubros.",
    desc: "Community",
    letra: "Community",
    color: "#49aff7",
    link: "https://community.phdcincubator.org/",
    video: "https://community.phdcincubator.org/",
  },

  {
    img: phdcImagen,
    alt: "Página web de Corporación de Desarrollo Hispano de Pittsburgh",
    desc: "PHDC",
    letra: "PHDC",
    color: "#baa182",
    link: "https://phdcincubator.org/",
    video: "https://phdcincubator.org/",
  },

  {
    img: latintechImagen,
    alt: "Colaboración en la creación de la página web de Latintech.",
    desc: "Latintech",
    letra: "Latintech",
    color: "#0f888f",
    link: "https://latintechpgh.com/",
    video: "https://latintechpgh.com/",
  },
  {
    img: holapittImagen,
    alt: "Página web para guiar al nuevo emprendedor en su llegada a Pittsburgh.",
    desc: "Holapittsburgh",
    letra: "Holapittsburgh",
    color: "#ffb512",
    link: "https://holapittsburgh.com/",
    video: "https://holapittsburgh.com/",
  },

  {
    img: DrfreezeImagen,
    alt: "Página web para cliente emprendedor.",
    desc: "Drfreeze",
    letra: "Drfreeze",
    color: "#7c7c7a",
    link: "https://drfreezellc.com/",
    video: "https://drfreezellc.com/",
  },
  {
    img: MLImagen,
    alt: "Página web para cliente emprendedor.",
    desc: "Mlmultilingual",
    letra: "Mlmultilingual",
    color: "#df3b4a",
    link: "https://www.mlmultilingualservices.com/",
    video: "https://www.mlmultilingualservices.com/",
  },

  {
    img: mezcalImagen,
    alt: "Página web para cliente emprendedor.",
    desc: "Mezcal",
    letra: "Mezcal",
    color: "#a77f5a",
    link: "https://monarcatradingllc.com/",
    video: "https://monarcatradingllc.com/",
  },
  {
    img: quatumImagen,
    alt: "Página web para cliente emprendedor.",
    desc: "Quantumvibe",
    letra: "Quantumvibe",
    color: "#165788",
    link: "https://www.quantumvibellc.net/",
    video: "https://www.quantumvibellc.net/",
  },
  {
    img: sanconsImagen,
    alt: "Página web para cliente emprendedor.",
    desc: "Sanconstructions",
    letra: "San Constructions",
    color: "#919095",
    link: "https://sanconstructionsllc.com/",
    video: "https://sanconstructionsllc.com/",
  },
  {
    img: tastyImagen,
    alt: "Página web para cliente emprendedor.",
    desc: "Tasty",
    letra: "Tasty",
    color: "#006749",
    link: "https://tastytaquitos.com/",
    video: "https://tastytaquitos.com/",
  },
];

const slidesCipax = slidesInfo.map((slide, index) => (
  <a
    className="slide-container-cipax"
    title={slide.alt}
    href={slide.video}
    target="_blank"
    rel="noreferrer"
    style={{
      backgroundColor: slide.color,
      opacity: "0.9",
    }}
    key={index}
  >
   
      <div className="imgCipax">
        <span 
          className="letraCipax"
          style={{
            fontSize: "40px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {slide.letra}
        </span>
      </div>

      <div className="slide-desc">
        <span>{slide.alt}</span>
      </div>
    
  </a>
));

export default slidesCipax;
