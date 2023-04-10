import React from 'react';
import './Display.css';

const Display = ({ value, result }) => {
  // check if the last character of value is an operator or not
  const lastCharIsOperator = /[+\-*/]$/.test(value);
  // add parentheses around the value if it's a single variable or a number and the last character is an operator
  const displayValue =
    /^[a-zA-Z0-9]+$/.test(value) && lastCharIsOperator ? `(${value})` : value;

  return (
    <div className="display-box">
      <form className="output-box">
        <input
          type="text"
          value={displayValue}
          readOnly
          className="input input-display"
        />
        <input
          type="text"
          value={result}
          readOnly
          className="output input-display"
        />
      </form>
    </div>
  );
};

export default Display;
