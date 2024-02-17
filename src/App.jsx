import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [playerActive, setPlayerActive] = useState("X");

  const handleSelectedSquere = () => {
    setPlayerActive((activePlayer) => (activePlayer === "X" ? "O" : "X"));
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialPlayerName="Player 1"
            playerSymbol="X"
            isActive={playerActive === "X"}
          />
          <Player
            initialPlayerName="Player 2"
            playerSymbol="0"
            isActive={playerActive === "O"}
          />
        </ol>
        <GameBoard
          onSelectedSquare={handleSelectedSquere}
          activePlayerSymbol={playerActive}
        />
      </div>
    </main>
  );
}

export default App;
