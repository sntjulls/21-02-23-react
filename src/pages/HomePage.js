import React, { useContext, useState, useCallback, useMemo } from "react";
import { ThemeContext } from "../contexts";
import Calendar from "../components/Calendar";
import UserProfile from "../components/UserProfile";
import CONSTANTS from "../constants";

const { THEMES } = CONSTANTS;
const calcSense = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};
const HomePage = (props) => {
  //console.log("render");
  const [sense, setSense] = useState(10);
  const [theme, setTheme] = useContext(ThemeContext);
  const isLight = theme === THEMES.LIGHT;
  const inlineStyle = {
    color: isLight ? "#222" : "#ccc",
    backgroundColor: isLight ? "#ccc" : "#222",
  };
  const handleTheme = useCallback(() => {
    setTheme(isLight ? THEMES.DARK : THEMES.LIGHT);
  }, [isLight, setTheme]);
  const handleValue = useCallback(
    ({ target: { value } }) => {
      setSense(Number(value));
    },
    [setSense]
  );
  const handleBtnLog = useCallback(() => {
    console.log(sense);
  }, [sense]);
  // useEffect(() => {
  //   console.log("created function handleValue");
  // }, [handleValue]);
  const memoCalcSense = useMemo(() => calcSense(sense), [sense]);
  return (
    <section style={inlineStyle}>
      <button onClick={handleTheme}>{isLight ? "dark" : "light"}</button>
      <Calendar />
      <UserProfile />
      <h3>{memoCalcSense}</h3>
      <input type="number" value={sense} onChange={handleValue} />
      <button onClick={handleBtnLog}>log sense</button>
    </section>
  );
};
export default HomePage;
