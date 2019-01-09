import React, { FunctionComponent } from 'react'

const Version: FunctionComponent = props => {
  return (
    <p>
      Version: <code>{process.env.APP_VERSION}</code>
    </p>
  )
}

export default Version
