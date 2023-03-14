import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tree from "./components/Tree";
import { UserContext } from "./contexts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
      },
    };
  }
  render() {
    const { user } = this.state;
    console.log(UserContext);
    return (
      <UserContext.Provider value={user}>
        <Header />
        <Tree />
      </UserContext.Provider>
    );
  }
}

export default App;
