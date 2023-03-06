import React from "react";
import PropTypes from "prop-types";
import styles from "./Col.module.scss";

const Col = (props) => {
  const { children, colNum } = props;
  return <div className={styles[`col-${colNum}`]}>{children}</div>;
};

Col.defaultProps = {
  colNum: 12,
};

Col.propTypes = {
  children: PropTypes.element,
  colNum: PropTypes.number,
};

export default Col;
