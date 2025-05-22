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
    alt: "Community",
    desc: "Community",
    letra: "C",
    color: "#49aff7",
    link: "https://community.phdcincubator.org/",
    video: "https://community.phdcincubator.org/",
  },

  {
    img: phdcImagen,
    alt: "PHDC",
    desc: "PHDC",
    letra: "P",
    color: "#baa182",
    link: "https://phdcincubator.org/",
    video: "https://phdcincubator.org/",
  },

  {
    img: latintechImagen,
    alt: "Latintech",
    desc: "Latintech",
    letra: "L",
    color: "#0f888f",
    link: "https://latintechpgh.com/",
    video: "https://latintechpgh.com/",
  },

  {
    img: DrfreezeImagen,
    alt: "Drfreeze",
    desc: "Drfreeze",
    letra: "D",
    color: "#7c7c7a",
    link: "https://drfreezellc.com/",
    video: "https://drfreezellc.com/",
  },
  {
    img: holapittImagen,
    alt: "Holapittsburgh",
    desc: "Holapittsburgh",
    letra: "H",
    color: "#ffb512",
    link: "https://holapittsburgh.com/",
    video: "https://holapittsburgh.com/",
  },
  {
    img: MLImagen,
    alt: "Mlmultilingual",
    desc: "Mlmultilingual",
    letra: "M",
    color: "#df3b4a",
    link: "https://www.mlmultilingualservices.com/",
    video: "https://www.mlmultilingualservices.com/",
  },

  {
    img: mezcalImagen,
    alt: "Mezcal",
    desc: "Mezcal",
    letra: "M",
    color: "#a77f5a",
    link: "https://monarcatradingllc.com/",
    video: "https://monarcatradingllc.com/",
  },
  {
    img: quatumImagen,
    alt: "Quantumvibe",
    desc: "Quantumvibe",
    letra: "Q",
    color: "#165788",
    link: "https://www.quantumvibellc.net/",
    video: "https://www.quantumvibellc.net/",
  },
  {
    img: sanconsImagen,
    alt: "Sanconstructions",
    desc: "Sanconstructions",
    letra: "S",
    color: "#919095",
    link: "https://sanconstructionsllc.com/",
    video: "https://sanconstructionsllc.com/",
  },
  {
    img: tastyImagen,
    alt: "Tasty",
    desc: "Tasty",
    letra: "T",
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
          style={{
            fontSize: "60px",
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
