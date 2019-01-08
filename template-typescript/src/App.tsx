import React, { FunctionComponent } from "react";
import logo from "./logo.svg";
import "./App.scss";

const App: FunctionComponent = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Version: <code>{process.env.APP_VERSION}</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/SendOutCards"
          target="_blank"
          rel="noopener noreferrer"
        >
          SendOutCards
        </a>
      </header>
    </div>
  );
};

export default App;
