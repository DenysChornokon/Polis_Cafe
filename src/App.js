import React, { useEffect, useState } from 'react';
import './App.css';
import HeaderMobile from './components/HeaderMobile';
import HeaderDesktop from './components/HeaderDesktop';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import MenuSquares from './components/MenuSquares';
import Map from './components/Map';
import Carousel from './components/Carousel';

import Footer from './components/Footer';
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <HeaderMobile
          bgScrollColor="#101010"
          logoDefaultColor="#fefefe"
          logoScrollColor="#fefefe"
        />
      ) : (
        <HeaderDesktop
          bgScrollColor="#101010"
        />
      )}
      <Hero />
      <About />

      <MenuSquares />
      <Menu />
      <Map />
      <Footer /> 
    </>
  );
}
export default App;