import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { themeMui } from './styles/themeStyles'
import './App.css'

import Pages from './Pages'

export default function App() {
  return (
    <>
      <ThemeProvider theme={themeMui}>
        <div className="body">
          <Pages />
        </div>
      </ThemeProvider>
    </>
  )
}
