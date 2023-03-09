import React from "react";
import PropTypes from "prop-types";

const ControlAmount = (props) => {
  const { amounts, currentResult, setResults } = props;
  const handleResult = ({ target: { value } }) => setResults(Number(value));
  const mapRadio = (amount, index) => (
    <label key={index} style={{padding: '10px'}}>
      <input
        type="radio"
        name="results"
        value={amount}
        onChange={handleResult}
        checked={currentResult === amount}
      />
      {amount}
    </label>
  );
  return <div>{amounts.map(mapRadio)}</div>;
};

ControlAmount.propTypes = {};

export default ControlAmount;
