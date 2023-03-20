import React, { useState, useEffect } from "react";
import styles from "./StopWatchFunc.module.scss";

const StopWatchFunc = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const handleBtn = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    console.log("start effect");
    // effect
    if (isRunning) {
      const intervalId = setInterval(() => {
        console.log("start setInterval");
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => {
        // cleanup
        console.log("clear setInterval");
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  return (
    <div className={styles.container}>
      <h2>{time}</h2>
      <button onClick={handleBtn}>{isRunning ? "stop" : "start"}</button>
    </div>
  );
};

export default StopWatchFunc;
