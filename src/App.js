import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(false);

  function showLogo() {
    setState(!state);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* CONDITIONALLY HIDES THE LOGO DEPENDING ON STATE */}
        {state ? <img src={logo} className="App-logo" alt="logo" /> : null}
        <button onClick={() => showLogo()}>Toggle Logo</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
