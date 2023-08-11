import React, { useState } from "react";
import "./Carousel.css";
import { SliderData } from "./CarouselData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <FontAwesomeIcon
        className="left-arrow"
        icon={faCircleArrowLeft}
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        className="right-arrow"
        icon={faCircleArrowRight}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img className="img" src={slide.image} />}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
