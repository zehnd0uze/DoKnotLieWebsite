import React, { useState, useEffect } from 'react';
import './Chapters.css';

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) {
    return <div className="no-media-placeholder">DATA CORRUPTED / NOT FOUND</div>;
  }

  return (
    <div className="slider-container">
      {images.map((img, idx) => (
        <img 
          key={idx} 
          src={img} 
          alt={`Classified Evidence ${idx + 1}`} 
          className={`fader-image ${idx === currentIndex ? 'active' : ''}`} 
        />
      ))}
      
      {images.length > 1 && (
        <div className="slider-indicators">
          {images.map((_, idx) => (
            <div key={idx} className={`indicator ${idx === currentIndex ? 'active' : ''}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const Chapters: React.FC = () => {
  const chapters = [
    {
      id: 1,
      title: "The Grand Illusion",
      status: "ACTIVE",
      location: "Golden View Building",
      synopsis: "Private Detective Philip Marlowe is called to a gruesome scene at the Golden View building. A businesswoman has been brutally murdered, and the killer has gone to disturbing lengths to destroy the evidence. With heavy rain washing away the physical clues, Marlowe must untangle a web of toxic relationships. Between a grieving partner, a resentful sibling, a nervous best friend, and a mysterious woman caught on CCTV, everyone has a secret. Can you see through the lies and find the killer before the trail goes cold?",
      images: ["/ch1_hallway.png", "/ch1_bathroom.png", "/ch1_livingroom.png", "/ch1_dining.png", "/ch1_mansion.png"]
    },
    {
      id: 2,
      title: "Beneath The Verdant Mask",
      status: "ACTIVE",
      location: "Ramapo, New York",
      synopsis: "A chilling discovery shakes Ramapo when a body is found dumped in a local public park. A suicide note is left at the scene citing financial ruin, but the victim's family confirms they are financially stable, making the scene highly suspicious. As Detective Marlowe digs into the victim's final hours, he uncovers whispers of a deadly, high-stakes game. With a suspect list that includes an evasive security chief, a towering man with matching footprints, and an eerily calm surgeon who happened to find the body, Marlowe must piece together the victim's fateful last taxi ride to catch a ruthless killer.",
      images: ["/ch2_playground.png", "/ch2_crimescene.jpg", "/ch2_taxi.jpg", "/ch2_cups.png"]
    }
  ];

  return (
    <section id="chapters" className="chapters-section">
      <div className="chapters-header">
        <h2 className="section-title">Case Files</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="chapters-showcase-container">
        {chapters.map((chapter, index) => (
          <div key={chapter.id} className={`chapter-showcase ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
            
            <div className="chapter-showcase-text">
              <div className="chapter-meta">
                <span className="meta-tag">FILE #{chapter.id}</span>
                <span className="meta-tag status-blinking">STATUS: {chapter.status}</span>
                <span className="meta-tag">LOC: {chapter.location}</span>
              </div>
              <h3 className="chapter-title">
                <span className="chapter-number">Chapter {chapter.id}</span>
                <br/>
                {chapter.title}
              </h3>
              <p className="chapter-synopsis">{chapter.synopsis}</p>
            </div>

            <div className="chapter-showcase-media">
              <div className="media-frame">
                <ImageSlider images={chapter.images} />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Chapters;
