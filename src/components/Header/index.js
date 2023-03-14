import React, { Component } from "react";
import { UserContext } from "../../contexts";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const { firstName } = this.context;
    return (
      <header className={styles.header}>
        <h1>logo</h1>
        <div>Hi, {firstName}</div>
      </header>
    );
  }
}

Header.contextType = UserContext;

export default Header;
