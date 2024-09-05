import { useState } from 'react';
import './Game.css';
import paths from './Paths';
import Good_End from '../End/Good_End';
import Bad_End from '../End/Bad_End';

function Game() {
  const [currentPath, setCurrentPath] = useState('1'); // Initialize with a default value
  const [baseValue, setBaseValue] = useState(0); // Initialize base value

  const renderScenario = () => {
    if (currentPath === 'end') {
      return baseValue > 0 ? <Good_End /> : <Bad_End />;
    }

    const currentScenario = paths[currentPath];
    return (
      <div>
        <p>{currentScenario.text}</p>
        <div className="options">
          {currentScenario.options.map((option, index) => (
            <p
              key={index}
              onClick={() => {
                setBaseValue(baseValue + option.value);
                setCurrentPath(option.next);
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
