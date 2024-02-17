import { PropTypes } from "prop-types";
import { useState } from "react";
import { initialGameBoard } from "../../utils";

const GameBoard = ({ onSelectedSquare, activePlayerSymbol }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectedSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const udatedGameBoard = [
        ...prevGameBoard.map((innerAray) => [...innerAray]),
      ];
      udatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return udatedGameBoard;
    });
    onSelectedSquare();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectedSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

GameBoard.propTypes = {
  onSelectedSquare: PropTypes.func.isRequired,
  activePlayerSymbol: PropTypes.node.isRequired,
};
