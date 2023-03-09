import React from "react";
import PropTypes from "prop-types";

const Paginate = (props) => {
  const { currentPage, handlePrevBtn, handleNextBtn } = props;
  return (
    <div>
      <button onClick={handlePrevBtn}>prev &lt; </button>
      <strong> {currentPage} </strong>
      <button onClick={handleNextBtn}> &gt; next</button>
    </div>
  );
};

Paginate.defaultProps = {
  currentPage: 1,
  handlePrevBtn: () => {},
  handleNextBtn: () => {},
};

Paginate.propTypes = {
  currentPage: PropTypes.number,
  handlePrevBtn: PropTypes.func,
  handleNextBtn: PropTypes.func,
};

export default Paginate;
