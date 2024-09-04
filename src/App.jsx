import './App.css';
import { useState } from 'react';
import Start from './Components/Start/Start';
import Game from './Components/Game/Game';
import End from './Components/End/End';

function App() {
  const [gameState, setGameState] = useState('start');

  const renderComponent = () => {
    switch (gameState) {
      case 'start':
        return <Start setGameState={setGameState} />;
      case 'game':
        return <Game setGameState={setGameState} />;
      case 'end':
        return <End setGameState={setGameState} />;
      default:
        return <Start setGameState={setGameState} />;
    }
  };

  console.log(gameState);

  return (
    <div className="body">
      {renderComponent()}
      <button onClick={() => setGameState('start')}>Start Menu</button>
      <button onClick={() => setGameState('game')}>Start Game</button>
      <button onClick={() => setGameState('end')}>End Game</button>
    </div>
  );
}

export default App;
