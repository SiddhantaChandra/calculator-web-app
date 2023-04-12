import { useState } from 'react';
import './Keys.css';

const Keys = ({ valueHandler }) => {
  const [lastOperator, setLastOperator] = useState(null);

  const clickHandler = (event) => {
    const value = event.target.getAttribute('value');
    if (['+', '-', '*', '/'].includes(value)) {
      if (lastOperator && ['+', '-', '*', '/'].includes(lastOperator)) {
        // if last operator is also an operator, remove it
        valueHandler('backspace');
      }
      setLastOperator(value);
    } else {
      setLastOperator(null);
    }
    valueHandler(value);
  };

  return (
    <div className="keys-box">
      <div className="keys-row">
        <div
          className="key key__blue key__delete"
          value="clear"
          onClick={clickHandler}
        >
          <p onClick={clickHandler} value="clear">
            C
          </p>
        </div>
        <div
          className="key key__blue key__signs"
          value="signs"
          onClick={clickHandler}
        >
          <p onClick={clickHandler} value="signs">
            +/-
          </p>
        </div>
        <div
          className="key key__blue key__mod"
          value="%"
          onClick={clickHandler}
        >
          <p onClick={clickHandler} value="%">
            %
          </p>
        </div>
        <div
          className="key key__red key__division"
          value="/"
          onClick={clickHandler}
        >
          <p onClick={clickHandler} value="/">
            ÷
          </p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__7" value="7" onClick={clickHandler}>
          <p onClick={clickHandler} value="7">
            7
          </p>
        </div>
        <div className="key key__8" value="8" onClick={clickHandler}>
          <p onClick={clickHandler} value="8">
            8
          </p>
        </div>
        <div onClick={clickHandler} className="key key__9" value="9">
          <p onClick={clickHandler} value="9">
            9
          </p>
        </div>
        <div
          onClick={clickHandler}
          className="key key__red key__multiply"
          value="*"
        >
          <p onClick={clickHandler} value="*">
            ×
          </p>
        </div>
      </div>
      <div className="keys-row">
        <div onClick={clickHandler} className="key key__4" value="4">
          <p onClick={clickHandler} value="4">
            4
          </p>
        </div>
        <div onClick={clickHandler} className="key key__5" value="5">
          <p onClick={clickHandler} value="5">
            5
          </p>
        </div>
        <div onClick={clickHandler} className="key key__6" value="6">
          <p onClick={clickHandler} value="6">
            6
          </p>
        </div>
        <div
          onClick={clickHandler}
          className="key key__red key__minus"
          value="-"
        >
          <p onClick={clickHandler} value="-">
            -
          </p>
        </div>
      </div>
      <div className="keys-row">
        <div onClick={clickHandler} className="key key__1" value="1">
          <p onClick={clickHandler} value="1">
            1
          </p>
        </div>
        <div onClick={clickHandler} className="key key__2" value="2">
          <p onClick={clickHandler} value="2">
            2
          </p>
        </div>
        <div onClick={clickHandler} className="key key__3" value="3">
          <p onClick={clickHandler} value="3">
            3
          </p>
        </div>
        <div onClick={clickHandler} className="key key__red key__add" value="+">
          <p onClick={clickHandler} value="+">
            +
          </p>
        </div>
      </div>
      <div className="keys-row">
        <div onClick={clickHandler} className="key key__0" value="0">
          <p onClick={clickHandler} value="0">
            0
          </p>
        </div>
        <div onClick={clickHandler} className="key key__00" value="00">
          <p onClick={clickHandler} value="00">
            00
          </p>
        </div>
        <div onClick={clickHandler} className="key key__dot" value=".">
          <p onClick={clickHandler} value=".">
            .
          </p>
        </div>
        <div
          onClick={clickHandler}
          className="key key__red key__equals"
          value="="
        >
          <p onClick={clickHandler} value="=">
            =
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keys;
