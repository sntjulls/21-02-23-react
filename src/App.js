import React, { useState } from "react";
import "./App.css";
import LearnHooks from "./components/LearnHooks";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button onClick={handleClick}>switch visibility</button>
      {isVisible && <LearnHooks />}
    </>
  );
};

export default App;
