import React, { useEffect, useState } from 'react';
import './Story.css';

const Story: React.FC = () => {
  const [typedText] = terminalTypingEffect(
    "LOGIN: MARLOWE, P.\nACCESS GRANTED.\n\nCASE FILE: #409-B\nLOCATION: RAMAPO, NEW YORK - LOCAL PARK\n\nINCIDENT REPORT:\nA gruesome murder shatters the peace of a quiet town.\nThe body is gone, but the chalk outline and the blood remain.\n\nOBJECTIVE:\nYou play as Detective Philip Marlowe. It's up to you to piece together the events of the night. \nThe truth is buried in the shadows.",
    40
  );

  return (
    <section id="story" className="story-section">
      <div className="terminal-container">
        <div className="terminal-screen">
          <div className="scanlines"></div>
          <div className="glow"></div>
          <p className="terminal-text">
            {typedText}
            <span className="cursor">_</span>
          </p>
        </div>
      </div>
    </section>
  );
};

// Custom hook for typing effect
function terminalTypingEffect(text: string, speed: number) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("story");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setHasStarted(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let i = 0;
    setDisplayedText(""); // Reset text in case of fast Strict Mode remount
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [hasStarted, text, speed]);

  return [displayedText, setDisplayedText] as const;
}

export default Story;
