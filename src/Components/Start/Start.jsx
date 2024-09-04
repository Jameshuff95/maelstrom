import './Start.css';
import { useEffect, useRef } from 'react';

function Start() {
  const startButtonRef = useRef(null);

  useEffect(() => {
    const startButton = startButtonRef.current;

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
  }, []);

  return (
    <div className="start_container">
      <h1 className="title">Maelstrom</h1>
      <div className="button_container">
        <button className="start" ref={startButtonRef}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Start;
