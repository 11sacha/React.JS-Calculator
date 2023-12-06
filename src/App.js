import React, {useState} from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  
  const handleNumber = (event) => {
    const number = event.target.textContent;

    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  }

  const hanldeOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + ' ' + operator + ' ');
  }

  const handleEqual = () => {
    setDisplay(eval(display))
  };

  const handleDecimal = () => {
    const array = display.split(' ');
    const lastElement = array[array.length - 1];

    if(!lastElement.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    setDisplay('0')
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div id="clear" className="row" onClick={handleClear}>
          AC
        </div>
        <div id="seven" onClick={handleNumber} className="number">
          7
        </div>
        <div id="eight" onClick={handleNumber} className="number">
          8
        </div>
        <div id="nine" onClick={handleNumber} className="number">
          9
        </div>
        <div id="multiply" onClick={hanldeOperator} className="operator">*</div>
        <div id="four" onClick={handleNumber} className="number">
          4
        </div>
        <div id="five" onClick={handleNumber} className="number">
          5
        </div>
        <div id="six" onClick={handleNumber} className="number">
          6
        </div>
        <div id="divide" onClick={hanldeOperator} className="operator">/</div>
        <div id="one" onClick={handleNumber} className="number">
          1
        </div>
        <div id="two" onClick={handleNumber} className="number">
          2
        </div>
        <div id="three" onClick={handleNumber} className="number">
          3
        </div>
        <div id="add" onClick={hanldeOperator} className="operator">+</div>
        <div id="zero" onClick={handleNumber} className="number">
          0
        </div>
        <div id="decimal" onClick={handleDecimal} className="number">.</div>
        <div id="equals" onClick={handleEqual} className="number">=</div>
        <div id="subtract" onClick={hanldeOperator} className="operator">-</div>
      </div>
    </div>
  );
}

export default App;
