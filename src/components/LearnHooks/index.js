import React, { useState } from "react";

const LearnHooks = (props) => {
  const [state, setState] = useState({ x: 0, y: 0, amount: 0 });
  const handleMove = (event) => {
    setState({
      ...state,
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handleClick = () => {
    setState({
      ...state,
      amount: state.amount + 1,
    });
  };
  return (
    <div
      onMouseMove={handleMove}
      style={{ backgroundColor: "pink" }}
      onClick={handleClick}
    >
      <p>coord x:{state.x}</p>
      <p>coord y:{state.y}</p>
      <p>amount:{state.amount}</p>
    </div>
  );
};

export default LearnHooks;
