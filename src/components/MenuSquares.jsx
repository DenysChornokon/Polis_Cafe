import React, { useState } from 'react'
import './MenuSquares.css'
import TestImg from '../assets/coffee-cup.jpg'


function MenuSquares() {



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
          <a href="#menu">
            <button className="card-button">Перейти</button>
          </a>
        </div>
        <div className="card two">
          <div className="card-details">
            <p className="text-title">Напої</p>
            <p className="text-body">
              Наші напої втілюють найкращі традиції домашньої кухні.
            </p>
          </div>
          <a href="#drinks-heading">
            <button className="card-button">Перейти</button>
          </a>
        </div>
        <div className="card three">
          <div className="card-details">
            <p className="text-title">Передзамовлення страв</p>
            <p className="text-body">
              Ми дбаємо про ваш комфорт, тому ви можете замовити страви на
              заздалегідь обраний день та годину .
            </p>
          </div>
          <a href="#stravy"><button className="card-button">Перейти</button></a>
        </div>
      </div>
    );
}

export default MenuSquares
