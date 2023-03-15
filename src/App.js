import React from "react";
import * as Yup from "yup";
import "./App.css";
import { SIGN_UP_SCHEMA } from "./utils/validationSchemas";

const App = () => {
  const user = {
    firstName: "Brad",
    lastName: "Pitt",
    email: "pitt@gmail.com",
    password: "gr3at@3wdsG",
    age: 59,
    //male: 'male', //male|female
  };
  console.log(SIGN_UP_SCHEMA.validate(user).then((data) => console.log(data)).catch((error) => console.log(error)));
  return null;
};

export default App;