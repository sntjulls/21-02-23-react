import React from "react";
import PropTypes from "prop-types";
import styles from "./Row.module.scss";

const Row = (props) => {
  const { children } = props;
  return <div className={styles.row}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Row;
