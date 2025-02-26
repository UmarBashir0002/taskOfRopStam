import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-bg1.jpg'; 

function Hero() {
  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      id="home"
    >
      <div className="hero-overlay">
        {/* Container for hero content */}
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-subtitle">No lines. Less hassle. Lower costs.</p>
            <h1 className="hero-heading">
              Easy Online Suboxone Treatment for Opioid Addiction
            </h1>
            <button className="hero-button">Download The App Today</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
