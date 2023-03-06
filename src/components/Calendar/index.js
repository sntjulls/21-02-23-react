import React, { Component } from "react";
import { format, add, startOfMonth } from "date-fns";
import styles from "./Calendar.module.scss";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(2005, 4, 2),
    };
  }

  addDay = () => {
    const { date } = this.state;
    this.setState({ date: add(date, { days: 1 }) });
  };
  addMonth = () => {
    const { date } = this.state;
    this.setState({ date: add(date, { months: 1 }) });
  };

  render() {
    const { date } = this.state;
    return (
      <div className={styles.container}>
        <p className={styles.content}>
          функція, яка повертає день тижня з якого почався місяць:{" "}
          {format(startOfMonth(date), "EEEE")}
        </p>
        <p>{format(date, "do MMMM yyyy, 'date:' EEEE 'Time:'  HH:mm:ss")}</p>
        <button className={styles.btn} onClick={this.addDay}>add 1 day</button>
        <button className={styles.btn} onClick={this.addMonth}>add 1 month</button>
      </div>
    );
  }
}

export default Calendar;
