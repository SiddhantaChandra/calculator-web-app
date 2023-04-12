import React, { useState } from 'react';
import Display from './Display/Display';
import Keys from './Keypad/Key';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');
  const [addNegative, setAddNegative] = useState(false);

  const handleSigns = () => {
    // set the flag to indicate that a negative sign should be added
    setAddNegative(true);
  };

  const valueHandler = (value) => {
    if (value === '=') {
      // evaluate the expression and update the result state
      try {
        const evalResult = eval(displayValue);
        setResult(evalResult);
      } catch (error) {
        setResult('Invalid Expression');
      }
    } else if (value === 'clear') {
      setDisplayValue('');
      setResult('');
    } else if (value === 'signs') {
      handleSigns();
    } else {
      // add a negative sign before the value if the flag is set
      const newValue = addNegative ? `(-${value})` : value;
      setAddNegative(false);

      // check if the input value is an operator and the last character of displayValue is also an operator
      if (
        ['+', '-', '*', '/'].includes(value) &&
        ['+', '-', '*', '/'].includes(displayValue.slice(-1))
      ) {
        // replace the last operator with the new operator
        setDisplayValue(displayValue.slice(0, -1) + value);
      } else if (['+', '-', '*', '/'].includes(value) && result !== '') {
        // if the input value is an operator and the result state has a value, set the displayValue to the result and attach the sign to it
        setDisplayValue(`${result}${value}`);
        setResult('');
      } else {
        // if the input value is a digit or a decimal point, add it to the displayValue state
        setDisplayValue(displayValue + newValue);
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Display value={displayValue} result={result} />
        <Keys valueHandler={valueHandler} />
      </div>
    </div>
  );
}

export default App;
