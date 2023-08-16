import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Image_1 from '../assets/images/Int_1.jpg'
import Image_2 from '../assets/images/Int_2.jpg'
import Image_3 from '../assets/images/Int_3.jpg'
function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      autoplay: true,
      autoplaySpeed: 5000,

      arrows: false,
      // vertical: true,
    };
  return (
    <Slider {...settings}>
      <div>
        <img className="slider-img" src={Image_1} alt="" />
      </div>
      <div>
        <img className="slider-img" src={Image_2} alt="" />
      </div>
      <div>
        <img className="slider-img" src={Image_3} alt="" />
      </div>
      {/* <div>
        <img className="slider-img" src={Image} alt="" />
      </div>
      <div>
        <img className="slider-img" src={Image} alt="" />
      </div> */}
    </Slider>
  );
}

export default Carousel
