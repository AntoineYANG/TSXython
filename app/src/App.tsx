import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Command } from './Command';

function App() {
  return (
    <div className="App">
      <Command HOST="127.0.0.1" PORT={ 2369 } />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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

export default App;
