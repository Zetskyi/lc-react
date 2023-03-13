import logo from '../logo.svg';
import '../App.css';
import {useState} from 'react';
import Another from './Another';

function AppOriginal() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(prevCount => prevCount-1);
  const increment = () => setCount(prevCount => prevCount+1);

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  }

  return (
    <div className="App">

      <header className="App-header">
        <Another name="test params hahahaha"/>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/AppOriginal.js</code> and save to reload.
        </p>
        { true &&
          <p style={someStyle}>{3 + 2}</p>
        }

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppOriginal;
