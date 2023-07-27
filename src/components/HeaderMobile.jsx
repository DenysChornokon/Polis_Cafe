import React, { useState, useEffect } from 'react';
import './HeaderMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';

function HeaderMobile({ bgScrollColor, logoDefaultColor, logoScrollColor }) {

  //* MENU-EXIT TOGGLE

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);



  //* BACKGROUND COLOR TOGGLE



  const [scrollPosition, setScrollPosition] = useState(0);
  const [bg, setBg] = useState("transparent");
  const [logoColor, setLogoColor] = useState(logoDefaultColor);



  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setBg(bgScrollColor);
      setLogoColor(logoScrollColor);
    } else {
      setBg('transparent');
      setLogoColor(logoDefaultColor);
    }
  }, [scrollPosition]);


  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
    setIsNavigationVisible(!isNavigationVisible);
  }

  const handleNavigationToggle = () => {
    setIsNavigationVisible(!isNavigationVisible);
  };



  return (
    <header className='mobile' style={{ background: bg }}>
      <div className="logo-container">
        <a href="#" className="logo" style={{ color: logoColor }}>
          Polis
        </a>
      </div>

      {isMenuVisible ? (
        <div className="menuIconContainer">
          <FontAwesomeIcon
            className='menuIcon'
            style={{ color: logoColor }}
            icon={faBars}
            onClick={toggleMenu}
          />
        </div>
      ) : (
        <div className="closeIconContainer">
          <FontAwesomeIcon
            className='closeIcon'
            style={{ color: logoColor }}
            icon={faXmark}
            onClick={toggleMenu}
          />
        </div>
      )}

      {isNavigationVisible && (
        <Navigation
          scrollPosition={scrollPosition}
          bgScrollColor={bgScrollColor}
          iconDefaultColor={logoDefaultColor}
          iconScrollColor={logoScrollColor}
          onClose={handleNavigationToggle}
        />
      )}
    </header>
  );
}

export default HeaderMobile;

