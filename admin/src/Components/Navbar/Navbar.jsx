import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav-logo.png';
import navProfile from '../../assets/nav-profile.png';
import navArrowicon from '../../assets/arrow_icon.svg';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container-logo">
        <img src={navlogo} alt="navlogo" className="nav-logo" />
        <div className="nav-title">
          <h1>Farm Shop</h1>
          <p>Admin Panel</p>
        </div>
      </div>
      <div className="nav-container-profile">
        <img src={navProfile} alt="navprofile" className="nav-profile" />
        <img src={navArrowicon} alt="" className="nav-arrow-icon" />
      </div>
    </div>
  );
};

export default Navbar;
