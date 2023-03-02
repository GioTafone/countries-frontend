import React from 'react'

import { Themes, Theme } from '../types'

export const themes: Themes = {
  orange: {
    color: '#f5f5f5',
    backgroundColor: '#f58a42',
  },

  blue: {
    color: '#f5f5f',
    backgroundColor: '#0c28f7',
  },

  green: {
    color: '#f5f5f5',
    backgroundColor: '#47d657',
  },
}

const ThemeContext = React.createContext({
  theme: themes.orange,
  switchTheme: (theme: Theme) => {
    console.log(theme)
  },
})

export default ThemeContext
