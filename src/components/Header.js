import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
          <img src={logo} alt='logo'/>
          <h1>PsyKick</h1>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="profile">
          <p>Samruddhi</p>
          <img src="#" alt="profile"/>
        </div>
    </header>
  );
};

export default Header;
