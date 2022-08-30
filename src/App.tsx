import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { themeMui } from './styles/themeStyles'
import './App.css'

import Routes from './Routes'

export default function App() {
  return (
    <>
      <ThemeProvider theme={themeMui}>
        <body>
          <Routes />
        </body>
      </ThemeProvider>
    </>
  )
}
