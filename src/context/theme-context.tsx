import React from 'react'

export type Theme = {
  color: string
  backgroundColor: string
}
export type Themes = {
  red: Theme
  blue: Theme
  green: Theme
}

export const themes: Themes = {
  red: {
    color: '#f5f5f5',
    backgroundColor: '#e33b3b',
  },

  blue: {
    color: '#f5f5f',
    backgroundColor: '#4242eb',
  },

  green: {
    color: '#f5f5f5',
    backgroundColor: '#47d657',
  },
}

const ThemeContext = React.createContext({
  theme: themes.red,
  switchTheme: (theme: Theme) => {
    console.log(theme)
  },
})

export default ThemeContext
