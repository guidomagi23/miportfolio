import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CastingVideo from './components/casting/CastingVideo.jsx';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Página oculta del video */}
        <Route path="/miportfolio/casting" element={<CastingVideo />} />
      </Routes>

      {window.location.pathname !== "/miportfolio/casting" &&
        window.location.pathname !== "/miportfolio/casting/" && (
          <div className="App">
            <Navbar isScrolling={scrollHeight} />
            <Cover />
            <About />
            <Slider />
            <Info />
            <Footer />
          </div>
        )}

    </Router>
  );
}

export default App;
