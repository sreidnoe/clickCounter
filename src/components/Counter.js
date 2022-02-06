import React from "react";

const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div>
      <div className="counter">
        <button type="button" className="btn btn-info" onClick={onDecrement}>
          -
        </button>
        &nbsp;&nbsp;&nbsp;
        <span>{count}</span>
        &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-info" onClick={onIncrement}>
          +
        </button>
        <br />
      </div>
    </div>
  );
};

export default Counter;
