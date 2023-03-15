import React, { Component } from "react";
import styles from "./SignInForm.module.css";

const initialState = {
  email: "",
  password: "",
  emailValid: true,
  passwordValid: true,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.email.value);
    console.log(target.password.value);
    this.setState({ ...initialState });
  };
  // handleEmail = ({ target: { value } }) => this.setState({ email: value });
  // handlePassword = ({ target: { value } }) =>
  //   this.setState({ password: value });

  handleInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [name + "Valid"]: !value.includes(" ") });

  render() {
    const { email, password, emailValid, passwordValid } = this.state;
    const emailClassName = `${styles.input} ${
      emailValid ? styles.valid : styles.invalid
    }`;
    const passwordClassName = `${styles.input} ${
      passwordValid ? styles.valid : styles.invalid
    }`;

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          className={emailClassName}
          type="email"
          placeholder="email"
          name="email"
          value={email}
          // брати значення, яке ввели і заносити у стан
          onChange={this.handleInput}
        />
        <input
          className={passwordClassName}
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={this.handleInput}
        />
        <input className={styles.input} type="submit" value="send" />
      </form>
    );
  }
}

export default SignInForm;
