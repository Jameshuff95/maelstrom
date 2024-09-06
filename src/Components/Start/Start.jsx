import './Start.css';
import '../../App.css';
import { useEffect, useRef } from 'react';

function Start({ setGameState }) {
  const startButtonRef = useRef(null);

  useEffect(() => {
    const startButton = startButtonRef.current;
    if (startButton) {
      const handleTouchStart = () => {
        startButton.style.border = '10px solid red';
        startButton.style.boxShadow = 'inset 0 0 0.5rem black';
        startButton.style.color = 'red';
        startButton.style.transform = 'scale(0.9)';
      };

      const handleTouchEnd = () => {
        startButton.style.border = '10px solid transparent';
        startButton.style.boxShadow = 'none';
        startButton.style.color = 'black';
        startButton.style.transform = 'scale(1)';
      };

      startButton.addEventListener('touchstart', handleTouchStart);
      startButton.addEventListener('touchend', handleTouchEnd);

      return () => {
        startButton.removeEventListener('touchstart', handleTouchStart);
        startButton.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  const handleClick = () => {
    setGameState('game');
  };

  return (
    <div>
      <div className="start_container">
        <h1 className="title">Maelstrom</h1>
        <div className="button_container">
          <div className="start_message">
            <h2>Introduction</h2>
            <p>
              In Ethan's dimly lit apartment, shadows dance on the walls. Once
              vibrant, Ethan is now trapped in depression, his days blending
              into nights. The world moves on, but for Ethan, time stands still.
            </p>
            <p>
              One evening, as rain taps against the window, Ethan hears
              whispers. At first, he dismisses them, but they insistently grow
              louder.
            </p>
            <p>
              Ethan stands at a crossroads. Will he succumb to the torment, or
              confront his inner demons and reclaim his sanity?
            </p>
            <p>
              The choice is yours. Navigate Ethan’s journey through a dark
              reality, where every decision shapes his fate. Will you guide him
              towards redemption, or will the abyss consume him?
            </p>
          </div>
          <button className="button" ref={startButtonRef} onClick={handleClick}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
