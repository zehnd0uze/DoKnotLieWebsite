import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const images = [
    '/park_statue.png',
    '/park_lake.png',
    '/car_lot.jpg',
    '/park_path.jpg',
    '/picklock.png',
    '/puzzle.png',
    '/evidence.png',
    '/police_cars.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2 className="section-title">Case Evidence</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="gallery-slider-container">
        <div className="main-viewport">
          <button className="nav-btn prev" onClick={prevSlide}>&larr;</button>
          
          <div className="slide-wrapper">
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className={`slide ${idx === currentIndex ? 'active' : ''}`}
                style={{ opacity: idx === currentIndex ? 1 : 0 }}
              >
                <img src={src} alt={`Evidence ${idx + 1}`} className="slider-image" />
                <div className="gallery-overlay">
                  <span className="interact-icon">E</span>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-btn next" onClick={nextSlide}>&rarr;</button>
        </div>

        <div className="thumbnail-track">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className={`thumb-item ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <img src={src} alt={`Thumb ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
