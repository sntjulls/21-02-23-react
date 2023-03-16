import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { ErrorMessage } from "formik";
import cx from "classnames";
import styles from "./InputValid.module.scss";

const InputValid = (props) => {
  const { name, ...restProps } = props;
  return (
    <label className={styles.label}>
      {" "}
      <span>{name} </span>
      <Field name={name}>
        {({ field, form, meta }) => {
          // console.log("field", field);
          // console.log("form", form);
          console.log("meta", meta);
          const classNames = cx({
            [styles.invalid]: meta.error && meta.touched,
          });
          return <input className={classNames} {...field} {...restProps} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

InputValid.defaultProp = {
  type: "text",
};

InputValid.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default InputValid;
