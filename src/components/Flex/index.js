import React from "react";
import PropTypes from "prop-types";
import styles from "./Flex.module.scss";

const Flex = (props) => {
  const { children, fd, js, ai, fw } = props;
  const inlineStyle = {
    display: 'flex',
    flexDirection: fd,
    justifyContent: js,
    alignItems: ai,
    flexWrap: fw,
  };
  return (
    <div className={styles.flex} style={inlineStyle}>
      {children}
    </div>
  );
};

Flex.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Flex;
