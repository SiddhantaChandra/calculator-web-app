import Display from './Display/Display';
import Keys from './Keypad/Key';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Display />
        <Keys />
      </div>
    </div>
  );
}

export default App;
