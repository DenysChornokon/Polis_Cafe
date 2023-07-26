import React from 'react'
import './Hero.css'
import mainImage from '../assets/main-bg.jpg'

function Hero() {
  return (
    <section className="hero">
        <img src={mainImage} alt="" className="heroImage" />
        <div className="heroText">
            <h1 className="heroName hero">Кулінарний дім «Поліс»</h1>
            <p className="heroSlogan hero">де смак зустрічає спогади...</p>
        </div>
    </section>
  )
}

export default Hero
