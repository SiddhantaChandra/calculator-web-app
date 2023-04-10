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

      // if the input value is a sign and the result state has a value, set the displayValue to the result and append the sign to it
      if (['+', '-', '*', '/'].includes(value) && result !== '') {
        setDisplayValue(`${result}${value}`);
        setResult('');
      } else {
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
