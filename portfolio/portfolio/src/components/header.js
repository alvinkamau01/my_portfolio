import React from 'react';
import '../css/header.css'; // Separate CSS file

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">Portfolio</a>
        
        <div className="navbar-toggle">
          <button aria-label="Toggle navigation">
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
        
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;