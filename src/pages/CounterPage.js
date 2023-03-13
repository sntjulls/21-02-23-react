import React, { Component } from "react";
import Counter from "../components/Counter";

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      text: "",
    };
  }
  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const { step, text } = this.state;
    return (
      <>
        <Counter step={Number(step)} text={text} />
        <label
          style={{ display: "block", marginTop: "15px", textAlign: "center" }}
        >
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={this.handleInput}
            name="step"
          />{" "}
          step = {step}
        </label>
        <label
          style={{ display: "block", marginTop: "15px", textAlign: "center" }}
        >
          <input
            type="text"
            value={text}
            onChange={this.handleInput}
            name="text"
          />{" "}
          text = {text}
        </label>
      </>
    );
  }
}

export default CounterPage;
