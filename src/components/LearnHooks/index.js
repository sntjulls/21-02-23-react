import React, { useState } from "react";

const LearnHooks = (props) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const add = () => {
    setCount((count) => count + step);
  };
  const sub = () => {
    setCount((count) => count - step);
  };
  const handleInput = ({ target: { value } }) => {
    setStep(Number(value));
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <input type="number" value={step} onChange={handleInput} />
    </div>
  );
};

export default LearnHooks;
