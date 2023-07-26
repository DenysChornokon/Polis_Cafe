import React, { useState, useEffect } from 'react';
import './HeaderMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function HeaderMobile() {

  //* MENU-EXIT TOGGLE

  const [isMenuVisible, setIsMenuVisible] = useState(true);
 
  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  //* BACKGROUND COLOR TOGGLE

  const bgScrollColor = '#ddd4c3cc';    //? bg color
  const logoDefaultColor = '#fff';
  const logoScrollColor = '#404040';

  const [scrollPosition, setScrollPosition] = useState(0);
  const [bg, setBg] = useState("transparent");
  const [logoColor, setLogoColor] = useState(logoDefaultColor);
  const [barsColor, setBarsColor] = useState(logoDefaultColor);
  const [exitColor, setExitColor] = useState(logoDefaultColor);


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
      setBarsColor(logoScrollColor);
      setExitColor(logoScrollColor);
      setLogoColor(logoScrollColor);
    } else {
      setBg('transparent');
      setBarsColor(logoDefaultColor);
      setExitColor(logoDefaultColor);
      setLogoColor(logoDefaultColor);
    }
  }, [scrollPosition]);



  return (
    <header className='mobile' style={{ background: bg }}>
      <div className="logo-container">
        <a href="#" className="logo" style={{color: logoColor}}>Polis</a>
      </div>

      {isMenuVisible ? (
        <div className="menuIconContainer">
          <FontAwesomeIcon className='menuIcon' style={{color: logoColor}} icon={faBars} onClick={toggleMenu} />
        </div>
      ) : (
        <div className="closeIconContainer">
          <FontAwesomeIcon className='closeIcon' style={{color: logoColor}} icon={faXmark} onClick={toggleMenu} />
        </div>
      )}
    </header>
  );
}

export default HeaderMobile;

