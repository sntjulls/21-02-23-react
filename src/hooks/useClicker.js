import { useState, useEffect } from "react";

const UseClicker = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleClick = () => {
      setCount((count) => count + 1);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return count;
};

export default UseClicker;
