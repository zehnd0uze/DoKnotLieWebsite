import React, { useState, useEffect } from 'react';
import './SidebarNav.css';

const SidebarNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const sections = [
    { id: 'hero', label: 'TOP' },
    { id: 'story', label: 'STORY' },
    { id: 'chapters', label: 'CASES' },
    { id: 'multiplayer', label: 'MULTIPLAYER' },
    { id: 'features', label: 'PLAY' },
    { id: 'gallery', label: 'MEDIA' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar-nav">
      {sections.map((section) => (
        <div 
          key={section.id} 
          className={`nav-dot-container ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
        >
          <span className="nav-label">{section.label}</span>
          <div className="nav-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default SidebarNav;
