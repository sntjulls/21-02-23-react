import React, { Component } from "react";
import './style.css'

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.idInterval = null;
    console.log("constructor");
  }

  tick = () => {
    const { time } = this.state;
    const newTime = new Date(time.getTime());
    newTime.setSeconds(newTime.getSeconds() + 1);
    this.setState({ time: newTime });
  };

  start = () => {
    if (this.idInterval === null) {
      this.idInterval = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.idInterval);
    this.idInterval = null;
  };

  resume = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    console.log("componentDidMount");
    //this.start();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    //clear side effects
    console.log("componentWillUnmount");
    this.stop();
  }
  render() {
    console.log("render");
    const { time } = this.state;

    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <button className={styles.btn} onClick={this.start}>start</button>
        <button className={styles.btn} onClick={this.stop}>stop</button>
        <button className={styles.btn} onClick={this.resume}>resume</button>
      </article>
    );
  }
}

export default StopWatch;
