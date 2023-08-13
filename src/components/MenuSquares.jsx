import React, { useState } from 'react'
import './MenuSquares.css'
import TestImg from '../assets/DSC_1976.jpg'
import Menu_1 from '../assets/images/menu_page-0001.jpg'
import Menu_2 from '../assets/images/menu_page-0002.jpg'

function MenuSquares() {

  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  const handleButtonClick = () => {
    setIsMenuDisplayed(true);
  }

    return (
      <div className="menu-squares-container">
        <div className="card one">
          <div className="card-details">
            <p className="text-title">Меню</p>
            <p className="text-body">
              Ми віддаємо перевагу найсвіжішим інгредієнтам, обираючи тільки
              натуральні та органічні продукти.
            </p>
          </div>
          <button className="card-button" onClick={handleButtonClick}>
            Перейти
          </button>
        </div>
        <div className="card two">
          <div className="card-details">
            <p className="text-title">Напої</p>
            <p className="text-body">
              Наші напої втілюють найкращі традиції домашньої кухні.
            </p>
          </div>
          <button className="card-button">Перейти</button>
        </div>
        <div className="card three">
          <div className="card-details">
            <p className="text-title">Передзамовлення страв</p>
            <p className="text-body">
              Ми дбаємо про ваш комфорт, тому ви можете замовити страви на
              заздалегідь обраний день та годину .
            </p>
          </div>
          <button className="card-button">Перейти</button>
        </div>

        {/* Image Menu */}

        {isMenuDisplayed && (
          <img src={Menu_1} alt="" className="menu-photo" />
        )}
      </div>
    );
}

export default MenuSquares
