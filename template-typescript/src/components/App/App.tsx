import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
import styles from './styles'
import Version from '../Version/Version'

class App extends Component {
  render() {
    return (
      <div css={styles.App}>
        <header css={styles.AppHeader}>
          <img src={logo} css={styles.AppLogo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            css={styles.AppLink}
            href="https://github.com/SendOutCards"
            target="_blank"
            rel="noopener noreferrer"
          >
            SendOutCards
          </a>
          <Version />
        </header>
      </div>
    )
  }
}

export default App
