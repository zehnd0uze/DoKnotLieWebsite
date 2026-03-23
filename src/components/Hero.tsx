import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Background elements */}
      <div className="fog-layer fog-layer-1"></div>
      <div className="fog-layer fog-layer-2"></div>
      
      {/* Police Lights FX */}
      <div className="police-light red-light"></div>
      <div className="police-light blue-light"></div>
      <div className="spotlight"></div>

      {/* Content Content */}
      <div className="hero-content">
        <img src="/hero_logo.png" alt="Do Knot Lie" className="hero-logo" />
        <p className="hero-subtitle">RAMAPO, NEW YORK. 1994. EVERY TRUTH IS A NOOSE.</p>
        <div className="hero-actions">
          <button className="hero-btn start" onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>START INVESTIGATION</span>
          </button>
          <button className="hero-btn trailer" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>WATCH TRAILER</span>
          </button>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="scroll-text">SCROLL TO INVESTIGATE</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
