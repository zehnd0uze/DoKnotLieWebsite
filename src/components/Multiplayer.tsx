import React from 'react';
import './Multiplayer.css';

const Multiplayer: React.FC = () => {
  const multiplayerFeatures = [
    {
      id: 1,
      title: "OBJECTIVE",
      thaiTitle: "หน่วยเก็บกู้หลักฐาน",
      description: "Players take on the role of an Evidence Collection Unit, competing to solve intricate puzzles within sealed rooms. Every second counts as you race against both time and your rivals.",
      image: "/multiplayer_character.png",
      tag: "COMPETITIVE"
    },
    {
      id: 2,
      title: "SABOTAGE",
      thaiTitle: "การขัดขวาง",
      description: "Collect special items like the 'Saw' or 'Flashlight' to sabotage your opponents. Delay their progress while you secure your own path to victory.",
      image: "/multiplayer_saw.png",
      tag: "STRATEGY"
    },
    {
      id: 3,
      title: "THE RACE",
      thaiTitle: "เส้นทางสู่ชัยชนะ",
      description: "The first player to solve all puzzles, collect all evidence items, and escape through the exit door will be crowned the winner. Only the fastest mind survives.",
      image: "/multiplayer_corridor.png",
      tag: "WIN CONDITION"
    }
  ];

  return (
    <section id="multiplayer" className="multiplayer-section">
      <div className="section-divider top"></div>
      
      <div className="multiplayer-header">
        <h2 className="section-title">Multiplayer Mode</h2>
        <p className="thai-subtitle">หน่วยเก็บกู้หลักฐาน vs. หน่วยพิสูจน์หลักฐาน</p>
        <div className="title-underline"></div>
      </div>

      <div className="multiplayer-content">
        <div className="multiplayer-intro">
          <p className="intro-text">
            Compete with up to <span className="highlight">4 Players</span> in a high-stakes race for the truth. 
            Navigate your own room, solve deadly puzzles, and use found items to sabotage your rivals.
          </p>
        </div>

        <div className="multiplayer-grid">
          {multiplayerFeatures.map((feature) => (
            <div key={feature.id} className="multi-feature-card">
              <div className="multi-image-wrapper">
                <img src={feature.image} alt={feature.title} className="multi-img" />
                <div className="multi-tag">{feature.tag}</div>
              </div>
              <div className="multi-info">
                <div className="multi-title-row">
                  <h3 className="multi-feature-title">{feature.title}</h3>
                  <span className="multi-thai-title">{feature.thaiTitle}</span>
                </div>
                <p className="multi-feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="leaderboard-preview">
          <div className="leaderboard-image-container">
            <img src="/multiplayer_leaderboard.png" alt="Leaderboard" className="leaderboard-img" />
            <div className="leaderboard-overlay">
              <h3 className="leaderboard-title">CLIMB THE RANKS</h3>
              <p>Establish your dominance on the global time-based leaderboard.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-divider bottom"></div>
    </section>
  );
};

export default Multiplayer;
