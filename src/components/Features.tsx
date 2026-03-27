import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Inspect & Interact",
      description: "Get up close with objects at the crime scene. Every item hides a story—inspect interactive evidence to reveal the dark truth.",
      image: "/chess_inspection.png"
    },
    {
      id: 2,
      title: "Classified Case Files",
      description: "Analyze detailed victim bios and autopsy reports. Interact with items to unlock documents that provide crucial context.",
      image: "/victim_file.png"
    },
    {
      id: 3,
      title: "Investigation Board",
      description: "Connect the dots. Link physical evidence, testimonies, and motives on your tactical board to visualize relationships.",
      image: "/investigation_board.png"
    },
    {
      id: 4,
      title: "Final Accusation",
      description: "Your deduction ends here. Use everything you have connected to choose the real murderer and bring the truth to light.",
      image: "/murderer_selection.png"
    },
    {
      id: 5,
      title: "Mini-Games",
      description: "Master high-stakes skill checks. From picklocking secured doors to decrypting data, your mechanical skills are as vital as your mind.",
      image: "/picklock.png"
    },
    {
      id: 6,
      title: "Explore Ramapo",
      description: "Navigate the atmospheric, rain-slicked streets of Ramapo, NY. A town where every secret is buried under a layer of fog.",
      image: "/park_statue.png"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-header">
        <h2 className="section-title">Investigation Gameplay</h2>
        <div className="title-underline"></div>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-image-container">
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <div className="feature-overlay">
                <span className="interact-icon">E</span>
              </div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
