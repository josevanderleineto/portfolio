// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../../assets/img/logo.svg';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logo} alt="Logo tag" /></div>
      <ul className={`navbar-links ${showMenu ? "show-menu" : ""}`}>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Menu;
