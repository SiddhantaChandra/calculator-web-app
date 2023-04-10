import './Keys.css';

const Keys = ({ valueHandler }) => {
  const clickHandler = (event) => {
    const value = event.target.getAttribute('value');
    valueHandler(value);
  };

  return (
    <div className="keys-box" onClick={clickHandler}>
      <div className="keys-row">
        <div className="key key__blue key__delete" value="clear">
          <p value="clear">C</p>
        </div>
        <div className="key key__blue key__signs" value="signs">
          <p value="signs">+/-</p>
        </div>
        <div className="key key__blue key__mod" value="%">
          <p value="%">%</p>
        </div>
        <div className="key key__red key__division" value="/">
          <p value="/">÷</p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__7" value="7">
          <p value="7">7</p>
        </div>
        <div className="key key__8" value="8">
          <p value="8">8</p>
        </div>
        <div className="key key__9" value="9">
          <p value="9">9</p>
        </div>
        <div className="key key__red key__multiply" value="*">
          <p value="*">×</p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__4" value="4">
          <p value="4">4</p>
        </div>
        <div className="key key__5" value="5">
          <p value="5">5</p>
        </div>
        <div className="key key__6" value="6">
          <p value="6">6</p>
        </div>
        <div className="key key__red key__minus" value="-">
          <p value="-">-</p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__1" value="1">
          <p value="1">1</p>
        </div>
        <div className="key key__2" value="2">
          <p value="2">2</p>
        </div>
        <div className="key key__3" value="3">
          <p value="3">3</p>
        </div>
        <div className="key key__red key__add" value="+">
          <p value="+">+</p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__0" value="0">
          <p value="0">0</p>
        </div>
        <div className="key key__00" value="00">
          <p value="00">00</p>
        </div>
        <div className="key key__dot" value=".">
          <p value=".">.</p>
        </div>
        <div className="key key__red key__equals" value="=">
          <p value="=">=</p>
        </div>
      </div>
    </div>
  );
};

export default Keys;
