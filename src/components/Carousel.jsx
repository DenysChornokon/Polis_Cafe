import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Image from '../assets/DSC_1976.jpg'
function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <Slider {...settings}>
      <div>
        <img className='slider-img' src={Image} alt="" />
      </div>
      <div>
        <img className='slider-img' src={Image} alt="" />
      </div>
      <div>
        <img className='slider-img' src={Image} alt="" />
      </div>
      <div>
        <img className='slider-img' src={Image} alt="" />
      </div>
      <div>
        <img className='slider-img' src={Image} alt="" />
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default Carousel
