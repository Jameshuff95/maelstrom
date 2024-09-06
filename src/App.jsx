import './App.css';
import { useState } from 'react';
import Start from './Components/Start/Start';
import Game from './Components/Game/Game';

function App() {
  const [gameState, setGameState] = useState('start');

  const renderComponent = () => {
    switch (gameState) {
      case 'start':
        return <Start setGameState={setGameState} />;
      case 'game':
        return <Game setGameState={setGameState} />;
      default:
        return <Start setGameState={setGameState} />;
    }
  };

  return <div className="body">{renderComponent()}</div>;
}

export default App;
