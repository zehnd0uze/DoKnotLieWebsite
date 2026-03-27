import React, { useState } from 'react';
import './Videos.css';

const Videos: React.FC = () => {
  const videoData = [
    {
      id: "5KKwz_SNrRE", // Trailer
      title: "OFFICIAL TRAILER",
      label: "1st Trailer"
    },
    {
      id: "n9cQFAfUGes", // Gameplay
      title: "GAMEPLAY REVEAL",
      label: "Gameplay Footage"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="videos" className="videos-section">
      <div className="videos-container">
        <h2 className="videos-heading">Trailer</h2>

        <div className="videos-carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {videoData.map((video, idx) => (
              <div key={idx} className="video-card">
                <div className="video-thumbnail-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0&modestbranding=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe"
                  ></iframe>
                </div>
                <div className="video-footer">
                  <span className="video-title">{video.title}</span>
                  <span className="video-label">{video.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))} disabled={currentIndex === 0}>
              &larr;
            </button>
            <div className="carousel-index">
              {String(currentIndex + 1).padStart(2, '0')} / {String(videoData.length).padStart(2, '0')}
            </div>
            <button className="carousel-btn next" onClick={() => setCurrentIndex((prev) => (prev < videoData.length - 1 ? prev + 1 : prev))} disabled={currentIndex === videoData.length - 1}>
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
