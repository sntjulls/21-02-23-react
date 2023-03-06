import React from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Col from "./components/Grid/Col";
import Container from "./components/Grid/Container";
import Row from "./components/Grid/Row";
import StopWatch from "./components/StopWatch/index";

const App = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col colNum={6}>
            <Calendar />
          </Col>
          <Col colNum={6}>
            <StopWatch />
          </Col>
        </Row>
        <Row>
          <Col colNum={8}>
            <StopWatch />
          </Col>
          <Col colNum={4}>
            <Calendar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
