import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import SlidesPersonales from "./SlidesPersonales";
import SlidesCipax from "./SlidesCipax";

const Slider = () => {
  const [currentCipaxIndex, setCurrentCipaxIndex] = useState(0);
  const [currentPersonalIndex, setCurrentPersonalIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextCipaxSlide = () => {
    setCurrentCipaxIndex((prev) => (prev + 1) % SlidesCipax.length);
  };

  const prevCipaxSlide = () => {
    setCurrentCipaxIndex(
      (prev) => (prev - 1 + SlidesCipax.length) % SlidesCipax.length
    );
  };

  const nextPersonalSlide = () => {
    setCurrentPersonalIndex((prev) => (prev + 1) % SlidesPersonales.length);
  };

  const prevPersonalSlide = () => {
    setCurrentPersonalIndex(
      (prev) => (prev - 1 + SlidesPersonales.length) % SlidesPersonales.length
    );
  };

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-container">
        {/* Header Section */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-briefcase"></i>
            <span>Mis Proyectos</span>
          </div>
          <h2 className="section-title">
            Proyectos que{" "}
            <span className="gradient-text">definen mi experiencia</span>
          </h2>
        </div>

        {/* Cipax Projects */}
        <div className={`project-category ${isVisible ? "visible" : ""}`}>
          <div className="category-header">
            <div className="category-info">
              <h3 className="category-title">
                <i className="fas fa-building"></i>
                Proyectos Profesionales
              </h3>
              <p className="category-period">CIPAX • 2023-2024</p>
            </div>
            <div className="category-description">
              <p>
                Trabajé en proyectos increíbles como parte de un equipo
                talentoso en{" "}
                <a
                  href="https://cipax.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="company-link"
                >
                  Cipax.dev
                </a>
                , desarrollando soluciones que priorizan la innovación y los
                resultados efectivos. Implementé aplicaciones web completas
                utilizando Laravel, WordPress, HTML, CSS, Bootstrap y Git.
              </p>
            </div>
          </div>

          <div className="slider-container">
            <div className="slider-wrapper">
              <button className="slider-nav prev" onClick={prevCipaxSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="slider-content">
                <div
                  className="slider-track"
                  style={{
                    transform: `translateX(-${currentCipaxIndex * 100}%)`,
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {SlidesCipax.map((slide, index) => (
                    <div key={index} className="slide-item">
                      {slide}
                    </div>
                  ))}
                </div>
              </div>

              <button className="slider-nav next" onClick={nextCipaxSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="slider-indicators">
              {SlidesCipax.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentCipaxIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentCipaxIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div className={`project-category ${isVisible ? "visible" : ""}`}>
          <div className="category-header">
            <div className="category-info">
              <h3 className="category-title">
                <i className="fas fa-user"></i>
                Proyectos Personales
              </h3>
              <p className="category-period">2019-2025</p>
            </div>
            <div className="category-description">
              <p>
                Durante mis estudios, desarrollo proyectos personales que me
                permiten explorar y consolidar mis habilidades en diversas
                tecnologías. Creé aplicaciones y soluciones utilizando
                JavaScript, HTML, CSS, PHP y React, combinando diseño y
                funcionalidades innovadoras.
              </p>
            </div>
          </div>

          <div className="slider-container">
            <div className="slider-wrapper">
              <button className="slider-nav prev" onClick={prevPersonalSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="slider-content">
                <div
                  className="slider-track"
                  style={{
                    transform: `translateX(-${currentPersonalIndex * 100}%)`,
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {SlidesPersonales.map((slide, index) => (
                    <div key={index} className="slide-item">
                      {slide}
                    </div>
                  ))}
                </div>
              </div>

              <button className="slider-nav next" onClick={nextPersonalSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="slider-indicators">
              {SlidesPersonales.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentPersonalIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentPersonalIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
