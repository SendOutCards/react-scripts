import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import styles from "./AppStyles";
class App extends Component {
  render() {
    return (
      <div css={styles.App}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>Version: {process.env.APP_VERSION}</p>
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
  }
}

export default App;
