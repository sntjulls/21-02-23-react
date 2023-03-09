import React from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Flex from "./components/Flex";
import Col from "./components/Grid/Col";
import Container from "./components/Grid/Container";
import Row from "./components/Grid/Row";
import StopWatch from "./components/StopWatch/index";
import UsersLoader from "./components/UsersLoader";
import WindowSizes from "./WindowSizes";

const App = (props) => {
  return (
    <>
      {/* <UsersLoader/> */}
<WindowSizes/>
      <button onClick={() => window.close()}>close</button>
      <button onClick={() => window.open("https://www.w3schools.com/")}>
        open w3schools
      </button>
      <hr />
      <hr />
      <button
        onClick={() => window.location.assign("https://www.w3schools.com/")}
      >
        asign
      </button>
      <button
        onClick={() => window.location.replace("https://www.google.com/")}
      >
        replace
      </button>
      <button onClick={() => window.location.reload()}>reload</button>
    </>
  );
};

export default App;
