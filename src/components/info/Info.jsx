import React, { useState, useEffect, useRef } from "react";
import "./Info.css";

const Info = () => {
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

  return (
    <section className="info-section" id="philosophy" ref={sectionRef}>
      <div className="info-container">
        <div className="info-content">
          {/* Decorative elements */}
          <div className="info-decoration">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>

          {/* Main content */}
          <div className={`info-text ${isVisible ? "visible" : ""}`}>
            

            <h2 className="info-title">
              No es solo un <span className="gradient-text">portfolio</span>, es
              una <span className="gradient-text">curva de aprendizaje</span>.
            </h2>

            <div className="info-description">
              <p>
                Cada proyecto representa un paso en mi evolución como
                desarrollador. Desde las primeras líneas de código hasta las
                aplicaciones complejas, cada experiencia me acerca más a mi
                visión de crear soluciones que impacten positivamente.
              </p>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
