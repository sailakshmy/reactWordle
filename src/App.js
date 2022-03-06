// import logo from './logo.svg';
import Gameboard from './components/Gameboard';
import Keyboard from './components/Keyboard';
import Solution from './components/Solution';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          Wordle
        {/* </a> */}
      </header>
      <Gameboard />
      <Keyboard/>
      <Solution />
    </div>
  );
}

export default App;
