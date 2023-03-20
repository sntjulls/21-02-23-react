import React, { useState, useEffect } from "react";

const LearnHooks = (props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [amount, setAmount] = useState(0);
  const handleMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handleClick = () => {
    setAmount((amount) => amount + 1);
  };

  useEffect(() => {
    console.log("effect");
    
    document.body.addEventListener("click", handleClick);
    return () => {
      console.log("clear effect");
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "pink" }}>
      <p>coord x:{coords.x}</p>
      <p>coord y:{coords.y}</p>
      <p>amount click:{amount}</p>
    </div>
  );
};

// onClick={handleClick}
export default LearnHooks;
