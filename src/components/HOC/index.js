import { ThemeContext } from "../../contexts";

export const WithTheme = (InnerComponent) => (props) =>
  (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <InnerComponent theme={theme} setTheme={setTheme}{...props} />
      )}
    </ThemeContext.Consumer>
  );

export const WithUser = (InnerComponent) => (props) =>
  (
    <ThemeContext.Consumer>
      {([user]) => <InnerComponent user={user}{...props} />}
    </ThemeContext.Consumer>
  );
