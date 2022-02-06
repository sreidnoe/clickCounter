import React from "react";

const ButtonCounter = ({
  timesClicked,
  onInputNumberChange,
  numberInputted,
  onInputNumber,
}) => {
  return (
    <div>
      <h3>Times Clicked</h3>
      <span>{timesClicked}</span>
      <br />
      <br />
      <input
        type="text"
        onChange={(event) => onInputNumberChange(event.target.value)}
        value={numberInputted}
      />
      &nbsp;&nbsp;&nbsp;
      <button type="button" className="btn btn-success" onClick={onInputNumber}>
        Change Count
      </button>
    </div>
  );
};

export default ButtonCounter;
