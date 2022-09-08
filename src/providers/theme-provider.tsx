import React, { useState, useEffect } from 'react'

import ThemeContext, { themes, Theme } from '../context/theme-context'

type ThemeProps = {
  children: React.ReactNode
}
const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(themes.orange)

  console.log('theme', theme)

  const switchTheme = (theme: Theme) => {
    setTheme(theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }

  useEffect(() => {
    try {
      const theme = localStorage.getItem('theme') || '{themes.orange}'
      setTheme(JSON.parse(theme))
    } catch (error) {
      localStorage.setItem('theme', JSON.stringify(themes.orange))
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
