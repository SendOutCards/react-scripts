import React, { FunctionComponent } from 'react'
import logo from '../../assets/logo.svg'
import styles from './styles'

const App: FunctionComponent = props => {
  return (
    <div css={styles.App}>
      <header css={styles.AppHeader}>
        <img src={logo} css={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Version: <code>{process.env.APP_VERSION}</code>
        </p>
        <a
          css={styles.AppLink}
          href="https://github.com/SendOutCards"
          target="_blank"
          rel="noopener noreferrer"
        >
          SendOutCards
        </a>
      </header>
    </div>
  )
}

export default App
