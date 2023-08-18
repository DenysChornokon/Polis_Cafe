import React from "react";
import "./Hero.css";
import mainImage from "../assets/images/Рыба фаршированая 2.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="image-container">
        
        <img src={mainImage} alt="" className="heroImage" />
      </div>
      <div className="heroText">
        <h1 className="heroName hero">Кулінарний дім «Поліс»</h1>
        <p className="heroSlogan hero">де смак зустрічає спогади...</p>
      </div>
    </section>
  );
}

export default Hero;
