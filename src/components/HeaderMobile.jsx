import React, { useState } from 'react';
import './HeaderMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function HeaderMobile() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <header className='mobile'>
      <div className="logo-container">
        <a href="#" className="logo">Polis</a>
      </div>

      {isMenuVisible ? (
        <div className="menuIconContainer">
          <FontAwesomeIcon className='menuIcon' icon={faBars} onClick={toggleMenu} />
        </div>
      ) : (
        <div className="closeIconContainer">
          <FontAwesomeIcon className='closeIcon' icon={faXmark} onClick={toggleMenu} />
        </div>
      )}
    </header>
  );
}

export default HeaderMobile;

