import React from "react";
import { Formik, Form } from "formik";
import { SIGN_IN_SCHEMA } from "../../../utils/validationSchemas.js";
import styles from "./LogInForm.module.scss";
import InputValid from "./../InputValid/index.js";

const initialValues = {
  email: "",
  password: "", //gr3at@3wdsG
  gender: "",
};

const LogInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log("values", values);
    console.log("formikBag", formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      {(formikProps) => {
        // console.log(formikProps);
        return (
          <Form className={styles.form}>
            <InputValid name="email" type="email" placeholder="Your email" />
            <InputValid
              name="password"
              type="password"
              placeholder="Your password"
            />
            <InputValid type="radio" value="Male" name="gender" /> Male
            <InputValid type="radio" value="Female" name="gender" /> Female
            <input type="submit" value="Send" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
