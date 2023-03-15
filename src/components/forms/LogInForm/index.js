import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const LogInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log("values", values);
    console.log("formikBag", formikBag);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => {
        console.log(formikProps);
        return (
          <form>
            <input
              type="email"
              name="email"
              onChange={formikProps.handleReset}
            />
            <input
              type="password"
              name="password"
              onChange={formikProps.handleChange}
            />
            <input
              type="submit"
              name="submit"
              onChange={formikProps.handleChange}
            />
          </form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
