import React from "react";
import SubParent from "../SubParent";
import CONSTANTS from "../../../constants";
import { WithTheme } from "../../HOCs";
const { THEMES } = CONSTANTS;

const Parent = (props) => {
  const {theme} = props;
  const isLightTheme = theme === THEMES.LIGHT;
  return (
    <div
      style={{
        backgroundColor: isLightTheme ? "wheat" : "#222",
        color: isLightTheme ? "#222" : "wheat",
      }}
    ><SubParent /></div>
  );
};
export default WithTheme(Parent);