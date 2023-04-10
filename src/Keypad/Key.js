import './Keys.css';

const Keys = () => {
  return (
    <div className="keys-box">
      <div className="keys-row">
        <div className="key key__blue key__delete">
          <p>C</p>
        </div>
        <div className="key key__blue key__signs">
          <p>+/-</p>
        </div>
        <div className="key key__blue key__percent">
          <p>%</p>
        </div>
        <div className="key key__red key__division">
          <p>÷</p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__7">
          <p>7</p>
        </div>
        <div className="key key__8">
          <p>8</p>
        </div>
        <div className="key key__9">
          <p>9</p>
        </div>
        <div className="key key__red key__multiply">
          <p>×</p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__4">
          <p>4</p>
        </div>
        <div className="key key__5">
          <p>5</p>
        </div>
        <div className="key key__6">
          <p>6</p>
        </div>
        <div className="key key__red key__minus">
          <p>-</p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__1">
          <p>1</p>
        </div>
        <div className="key key__2">
          <p>2</p>
        </div>
        <div className="key key__3">
          <p>3</p>
        </div>
        <div className="key key__red key__add">
          <p>+</p>
        </div>
      </div>
      <div className="keys-row">
        <div className="key key__0">
          <p>0</p>
        </div>
        <div className="key key__00">
          <p>00</p>
        </div>
        <div className="key key__dot">
          <p>.</p>
        </div>
        <div className="key key__red key__equals">
          <p>=</p>
        </div>
      </div>
    </div>
  );
};

export default Keys;
