import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <img src="/footer_logo.png" alt="Flipflop Express" className="footer-logo-img" />
        
        <div className="social-links">
          <a href="#twitter" className="social-link">Twitter/X</a>
          <a href="#discord" className="social-link">Discord</a>
          <a href="#youtube" className="social-link">YouTube</a>
          <a href="https://drive.google.com/drive/folders/1UD6jIUM4VGmwq7rkkAElxqLvOzjS3vF3?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-link">Press Kit</a>
        </div>
        
        <div className="legal-section">
          <p className="copyright">&copy; {new Date().getFullYear()} Flipflop Express Studio. All rights reserved.</p>
          <p className="disclaimer">"Do Knot Lie" is a trademark of Flipflop Express Studio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
