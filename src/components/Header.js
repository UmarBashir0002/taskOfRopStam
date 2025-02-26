import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Left side: Logo */}
        <div className="header-left">
          <div className="header-logo">LOGO</div>
        </div>

        {/* Center: Navigation */}
        <div className={`header-center ${isOpen ? 'nav-open' : ''}`}>
          <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#owners">Owners</a>
            <a href="#tenants">Tenants</a>
            <a href="#properties">Properties</a>
          </nav>
        </div>

        {/* Right side: CTA Button */}
        <div className="header-right">
          <button className="header-cta">Start Treatment</button>
        </div>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
