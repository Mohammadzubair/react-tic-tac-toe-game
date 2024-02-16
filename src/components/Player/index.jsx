import { useState } from "react";
import PropTypes from "prop-types";

const Player = ({ initialPlayerName, playerSymbol }) => {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" onChange={handleChange} value={playerName} />
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;

Player.propTypes = {
  initialPlayerName: PropTypes.string.isRequired,
  playerSymbol: PropTypes.node.isRequired,
};
