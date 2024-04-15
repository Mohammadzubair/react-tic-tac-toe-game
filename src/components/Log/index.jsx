import { PropTypes } from "prop-types";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selectd {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;

Log.propTypes = {
  turns: PropTypes.array,
};
