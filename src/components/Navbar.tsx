import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        DO KNOT LIE
      </div>
      <ul className="navbar-links">
        <li onClick={() => scrollToSection('story')}>CASE FILE</li>
        <li onClick={() => scrollToSection('videos')}>TRAILERS</li>
        <li onClick={() => scrollToSection('chapters')}>CHAPTERS</li>
        <li onClick={() => scrollToSection('multiplayer')}>MULTIPLAYER</li>
        <li onClick={() => scrollToSection('features')}>MECHANICS</li>
        <li onClick={() => scrollToSection('gallery')}>EVIDENCE</li>
      </ul>
      <div className="navbar-cta">
        <button className="wishlist-btn">WISHLIST ON STEAM</button>
      </div>
    </nav>
  );
};

export default Navbar;
