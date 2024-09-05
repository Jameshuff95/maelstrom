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
              In the forsaken depths of the asylum, where shadows whisper and
              sanity crumbles, Dr. Evelyn Carter’s journey begins.
            </p>
            <p>
              Each choice she makes drags her deeper into the abyss, where the
              line between reality and nightmare blurs.
            </p>
            <p>
              What secrets lie hidden in the darkness? What truths will she
              uncover about herself?
            </p>
            <p>
              Is she ready to confront the horrors that lurk within her own
              mind?
            </p>
            <p>
              Amidst the chaos, can she find a glimmer of hope to guide her back
              to the light?
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
