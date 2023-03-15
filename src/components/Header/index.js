import React from "react";
import cx from "classnames";
import { WbSunny, DarkMode } from "@mui/icons-material";
import { WithTheme, WithUser } from "../HOCs";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

const Header = (props) => {
  const {
    theme,
    setTheme,
    user: { firstName },
  } = props;
  const isLightTheme = theme === THEMES.LIGHT;
  const headerClasses = cx(styles.header, {
    [styles.light]: isLightTheme,
    [styles.dark]: theme === THEMES.DARK,
  });
  const newTheme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
  return (
    <header className={headerClasses}>
      <h1>logo</h1>
      {/* translate  hi */}
      <div>Hi, {firstName}</div>
      <span
        onClick={() => {
          setTheme(newTheme);
        }}
      >
        {isLightTheme ? <DarkMode /> : <WbSunny />}
      </span>
    </header>
  );
};

export default WithUser(WithTheme(Header));
