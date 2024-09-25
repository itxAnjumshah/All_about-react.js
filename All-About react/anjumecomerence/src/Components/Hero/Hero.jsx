import React from "react";
import "./HeroStyle.css";
import hero_hand from "../Assets/hand_icon.png";
import Arrow_icon from "../Assets/arrow.png";
import Hero_img  from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hero_hand} alt="" />
          </div>
          <p>COLLECTIONS</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-button">
          <div> Latest Collection</div>
          <img src={Arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={Hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
