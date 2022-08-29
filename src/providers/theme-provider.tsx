import React, { useState, useEffect } from 'react'

import ThemeContext, { themes, Theme } from '../context/theme-context'

type ThemeProps = {
  children: React.ReactNode
}
const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(themes.red)

  const switchTheme = (theme: Theme) => {
    setTheme(theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }

  useEffect(() => {
    try {
      const theme = localStorage.getItem('theme') || '{}'
      setTheme(JSON.parse(theme))
    } catch (error) {
      localStorage.setItem('theme', JSON.stringify(themes.red))
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
