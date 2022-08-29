import React from 'react'

export const themes = {
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

const ThemeContext = React.createContext(themes.red)

export default ThemeContext
