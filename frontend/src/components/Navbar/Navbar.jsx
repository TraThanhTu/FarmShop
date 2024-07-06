import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cart_logo from '../../assets/shopping-cart.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu] = useState('home');
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <Link style={{ textDecoration: 'none' }} to="/">
            <img src={logo} alt="" />
          </Link>
          <p>Farm Shop</p>
        </div>

        <ul className="nav-menu">
          <li onClick={() => setMenu('home')}>
            <Link style={{ textDecoration: 'none' }} to="/">
              Home
            </Link>
            {menu === 'home' ? <hr /> : ''}
          </li>
          <li onClick={() => setMenu('fruit')}>
            <Link style={{ textDecoration: 'none' }} to="/fruit">
              Fruit{' '}
            </Link>
            {menu === 'fruit' ? <hr /> : ''}
          </li>
          <li onClick={() => setMenu('vegetable')}>
            <Link style={{ textDecoration: 'none' }} to="/vegetable">
              Vegetable{' '}
            </Link>
            {menu === 'vegetable' ? <hr /> : ''}
          </li>
          <li onClick={() => setMenu('present')}>
            <Link style={{ textDecoration: 'none' }} to="/present">
              Present{' '}
            </Link>
            {menu === 'present' ? <hr /> : ''}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link style={{ textDecoration: 'none' }} to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_logo} alt="" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
