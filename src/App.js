import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

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

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainContent scrollHeight={scrollHeight} />} />
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
