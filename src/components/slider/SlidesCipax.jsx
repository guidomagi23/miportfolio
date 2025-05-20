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
        link: "https://community.phdcincubator.org/",
        video: "https://community.phdcincubator.org/"
    },

    {
        img: phdcImagen,
        alt: "PHDC",
        desc: "PHDC",
        link: "https://phdcincubator.org/",
        video: "https://phdcincubator.org/"
    },

    {
        img: latintechImagen,
        alt: "Latintech",
        desc: "Latintech",
        link: "https://latintechpgh.com/",
        video: "https://latintechpgh.com/"
    },

    {
        img: DrfreezeImagen,
        alt: "Drfreeze",
        desc: "Drfreeze",
        link: "https://drfreezellc.com/",
        video: "https://drfreezellc.com/"
    },
    {
        img: holapittImagen,
        alt: "Holapittsburgh",
        desc: "Holapittsburgh",
        link: "https://holapittsburgh.com/",
        video: "https://holapittsburgh.com/"
    },
    {
        img: MLImagen,
        alt: "Mlmultilingual",
        desc: "Mlmultilingual",
        link: "https://www.mlmultilingualservices.com/",
        video: "https://www.mlmultilingualservices.com/"
    },

    {
        img: mezcalImagen,
        alt: "Mezcal",
        desc: "Mezcal",
        link: "https://monarcatradingllc.com/",
        video: "https://monarcatradingllc.com/"
    },
    {
        img: quatumImagen,
        alt: "Quantumvibe",
        desc: "Quantumvibe", 
        link: "https://www.quantumvibellc.net/",
        video: "https://www.quantumvibellc.net/"
    },
    {
        img: sanconsImagen,
        alt: "Sanconstructions",         
        desc: "Sanconstructions",
        link: "https://sanconstructionsllc.com/",
        video: "https://sanconstructionsllc.com/"
    },
    {
        img: tastyImagen,
        alt: "Tasty",
        desc: "Tasty",
        link: "https://tastytaquitos.com/",
        video: "https://tastytaquitos.com/"
    }
    
    

]

const slidesCipax = slidesInfo.map((slide) => (
    <div className="slide-container-cipax">
        <a className="imgCipax" title={slide.alt} href={slide.video} alt={slide.alt} target="_blank" rel="noreferrer"><img title={slide.alt} src={slide.img} alt={slide.alt}/> </a>             
        <div className="slide-desc">
            <span>{slide.alt}</span>
        </div>
    </div>


));

export default slidesCipax;