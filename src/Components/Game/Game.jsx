import { useState } from 'react';
import './Game.css';
import paths from './Paths';

function Game({ setGameState }) {
  const [currentPath, setCurrentPath] = useState('1');

  const renderScenario = () => {
    const currentScenario = paths[currentPath];
    return (
      <div className="inner_container">
        <p className="scenario">{currentScenario.text}</p>
        <div className="options">
          {currentScenario.options.map((option, index) => (
            <p
              key={index}
              onClick={() => {
                if (option.next === 'start') {
                  setGameState('start');
                } else {
                  setCurrentPath(option.next);
                }
              }}
            >
              {option.text}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="game_container">
      <div className="card1">{renderScenario()}</div>
    </div>
  );
}

export default Game;
