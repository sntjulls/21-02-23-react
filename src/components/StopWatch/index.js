import React, { Component } from "react";
import styles from "./style.module.scss";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.idInterval = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
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

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {
    this.stop();
  }
  render() {
    //console.log("render");
    const { time } = this.state;

    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <div className={styles.controlBtn}>
          <button className={styles.btn} onClick={this.start}>
            start
          </button>
          <button className={styles.btn} onClick={this.stop}>
            stop
          </button>
          <button className={styles.btn} onClick={this.resume}>
            resume
          </button>
        </div>
      </article>
    );
  }
}

export default StopWatch;
