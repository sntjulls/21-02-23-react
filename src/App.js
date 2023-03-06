import React from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Flex from "./components/Flex";
import Col from "./components/Grid/Col";
import Container from "./components/Grid/Container";
import Row from "./components/Grid/Row";
import StopWatch from "./components/StopWatch/index";
import UsersLoader from "./components/UsersLoader";

const App = (props) => {
  return (
    <>
    <UsersLoader/>
      {/* <Flex fd="row" jc="space-around" ai="center" fw="wrap">
        <StopWatch />
        <Calendar />
      </Flex>
      <Flex fd="column" jc="center" ai="start" fw="nowrap">
        <StopWatch />
        <Calendar />
      </Flex> */}
    </>
  );
};

export default App;
