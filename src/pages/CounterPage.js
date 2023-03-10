import React from "react";
import { Component } from "react";

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  handleStep = ({ target: { name, value } }) => {
    this.setState({ [name]: Number(value) });
  };
  render() {
    const { step } = this.state;
    return (
      <>
        <Counter step={step} />
        <label
          style={{ display: "block", marginTop: "15px", textAlign: "center" }}
        >
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={this.handleStep}
            name={step}
          />{" "}
          step = {step}{" "}
        </label>
      </>
    );
  }
}

export default CounterPage;
