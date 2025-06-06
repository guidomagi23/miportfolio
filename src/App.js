import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CastingVideo from './components/casting/CastingVideo.jsx';

function MainContent({ scrollHeight }) {
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Routes>
      {/* Página oculta del video */}
      <Route path="/casting" element={<CastingVideo />} />

      {/* Página principal */}
      {location.pathname !== "/casting" && (
        <Route path="/" element={<MainContent scrollHeight={scrollHeight} />} />
      )}
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
