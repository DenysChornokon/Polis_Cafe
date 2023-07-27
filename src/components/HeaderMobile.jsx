import React, { useState, useEffect } from 'react';
import './HeaderMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';

function HeaderMobile(props) {

  //* MENU-EXIT TOGGLE

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
 
  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
    setIsNavigationVisible(!isNavigationVisible);
  }

  const handleNavigationToggle = () => {
    setIsNavigationVisible(!isNavigationVisible);
  };

  //* BACKGROUND COLOR TOGGLE



  const [scrollPosition, setScrollPosition] = useState(0);
  const [bg, setBg] = useState("transparent");
  const [logoColor, setLogoColor] = useState(props.logoDefaultColor);
  const [barsColor, setBarsColor] = useState(props.logoDefaultColor);
  const [exitColor, setExitColor] = useState(props.logoDefaultColor);


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
      setBg(props.bgScrollColor);
      setBarsColor(props.logoScrollColor);
      setExitColor(props.logoScrollColor);
      setLogoColor(props.logoScrollColor);
    } else {
      setBg('transparent');
      setBarsColor(props.logoDefaultColor);
      setExitColor(props.logoDefaultColor);
      setLogoColor(props.logoDefaultColor);
    }
  }, [scrollPosition]);



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
          bgScrollColor={props.bgScrollColor}
          iconDefaultColor={props.iconDefaultColor}
          iconScrollColor={props.iconScrollColor}
          onClose={handleNavigationToggle}
        />
      )}
    </header>
  );
}

export default HeaderMobile;

