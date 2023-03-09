import React from "react";
import PropTypes from "prop-types";
import styles from "./Flex.module.scss";
import { dirHelper } from '../../helpers'

const Flex = (props) => {
  const { children, jc, ai, fw, style, column, reverse, ...restProps } = props;

  const inlineStyle = {
    ...style,
    display: "flex",
    flexDirection: dirHelper(column, reverse),
    justifyContent: jc,
    alignItems: ai,
    flexWrap: fw,
  };

  return (
    <div className={styles.flex} style={inlineStyle} {...restProps}>
      {children}
    </div>
  );
};

Flex.defaultProps = {
  fd: "row",
  jc: "center",
  ai: "center",
  fw: "nowrap",
};

Flex.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  fd: PropTypes.string,
  jc: PropTypes.string,
  ai: PropTypes.string,
  fw: PropTypes.string,
};

export default Flex;
