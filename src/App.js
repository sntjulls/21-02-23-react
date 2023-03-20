import React, { useState } from "react";
import "./App.css";
import LearnHooks from "./components/LearnHooks";
import StopWatchFunc from "./components/StopWatchFunc/index";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button onClick={handleClick}>switch visibility</button>
      {isVisible && <StopWatchFunc />}
    </>
  );
};

export default App;
