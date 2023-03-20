import React, { useState, useEffect } from "react";
import { format, addMilliseconds } from "date-fns";
import styles from "./StopWatchFunc.module.scss";

const StopWatchFunc = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);
  const handleBtn = () => {
    setIsRunning(!isRunning);
  };
  const handleBtnReset = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
    setIsRunning(false);
  };

  useEffect(() => {
    // effect
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => addMilliseconds(prevTime, 1000));
      }, 1000);

      return () => {
        // cleanup
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  return (
    <div className={styles.container}>
      <h2>{format(time, "HH:mm:ss")}</h2>
      <button onClick={handleBtn}>{isRunning ? "stop" : "start"}</button>
      <button onClick={handleBtnReset}>reset</button>
    </div>
  );
};

export default StopWatchFunc;
