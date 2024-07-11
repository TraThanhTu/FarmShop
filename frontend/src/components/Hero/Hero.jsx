import React from 'react';
import './Hero.css';
import arrow_icon from '../../assets/arrow.png';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New arraivals only</h2>
        <div>
          <p>New</p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Lastest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
