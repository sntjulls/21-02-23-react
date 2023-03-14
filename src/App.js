import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tree from "./components/Tree";
import { UserContext, ThemeContext } from "./contexts";
import CONSTANTS from "./constants";
const {THEMES} = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
      },
      theme: THEMES.LIGHT
    };
  }
  render() {
    const { user, theme } = this.state;
    console.log(UserContext);
    return (
      <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <Header />
        <Tree />
      </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
