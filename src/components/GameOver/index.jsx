import { PropTypes } from "prop-types";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>it&apos;s a draw</p>}
      <button onClick={onRestart}>Rematch!</button>
    </div>
  );
};

export default GameOver;

GameOver.propTypes = {
  winner: PropTypes.string,
  onRestart: PropTypes.func.isRequired,
};
