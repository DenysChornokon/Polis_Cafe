import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="heading-and-navigation">
        <h2 className="footer-heading">«Поліс»</h2>

        <ul className="navContainer">
          <li className="navItem"><a href="#" className="i">Головна</a></li>
          <li className="navItem"><a href="#about" className="i">Про Нас</a></li>
          <li className="navItem"><a href="#menu" className="i">Меню</a></li>
          <li className="navItem"><a href="#contacts" className="i">Контакти</a></li>
        </ul>

      </div>

      <div className="text-and-copyright">

        <p className='text'>Ми пропонуємо домашні страви – не вдома, без клопоту,
          тільки з свіжих та якісних продуктів, з посмішкою та позитивною енергетикою.
        </p>
        <p className="copyright">&#169; All Right Reserved</p>

      </div>

      <div className="socials">
        <div className="flex">
          <FontAwesomeIcon className='icon' icon={faInstagram} />
          <FontAwesomeIcon className='icon' icon={faFacebook} />
          <FontAwesomeIcon className='icon' icon={faTelegram} />
        </div>
      </div>

    </footer >
  )
}

export default Footer
