import React from 'react'
import './About.css'
import Slider from './Carousel.jsx'
import { SliderData } from "./CarouselData";
import AboutImage from '../assets/side-img-1.avif'

function About() {
  return (
    <div className="about-bg-container">
      <section className="about" id="about">
        <div className="aboutContent">
          <h2 className="aboutHeading centrHeading">Кулінарний дім «Поліс»</h2>
          <p>
            Наш заклад спеціалізується на стравах домашньої кухні. Кожен гість
            для нас як близький друг, якому ми хочемо забезпечити домашній
            затишок. Невеличкий зал вміщує саме те число осіб, яке потрібне для
            створення відчуття родинного столу. Вишукані страви в поєднанні з
            атмосферою затишку роблять наш заклад ідеальним вибором для
            невеликих святкувань, романтичних вечерь та особливих моментів.
          </p>
        </div>
      </section>
      <Slider slides={SliderData} />
    </div>
  );
}

export default About
