import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false); // Close menu on click
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}>
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

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
          <ul className="mobile-menu-links">
            <li onClick={() => scrollToSection('hero')}>TOP</li>
            <li onClick={() => scrollToSection('story')}>CASE FILE</li>
            <li onClick={() => scrollToSection('videos')}>TRAILERS</li>
            <li onClick={() => scrollToSection('chapters')}>CHAPTERS</li>
            <li onClick={() => scrollToSection('multiplayer')}>MULTIPLAYER</li>
            <li onClick={() => scrollToSection('features')}>MECHANICS</li>
            <li onClick={() => scrollToSection('gallery')}>EVIDENCE</li>
          </ul>
          <div className="mobile-menu-footer">
             <button className="wishlist-btn mobile">WISHLIST ON STEAM</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
