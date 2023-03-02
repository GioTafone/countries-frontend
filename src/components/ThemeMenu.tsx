import React, { useContext } from 'react'

import ThemeContext, { themes } from '../context/theme-context'
import { Button } from '.'
import MUI from '../muiComponents'

const ThemeMenu = () => {
  const { switchTheme } = useContext(ThemeContext)

  const actions = [
    {
      action: () => switchTheme(themes.orange),
      text: 'Orange',
      textColor: '#f58a42',
    },
    {
      action: () => switchTheme(themes.blue),
      text: 'Blue',
      textColor: '#0c28f7',
    },
    {
      action: () => switchTheme(themes.green),
      text: 'Green',
      textColor: '#47d657',
    },
  ]

  return (
    <MUI.Grid item xs={12}>
      <MUI.Typography align="center" variant="h6" component="h2" sx={{ py: 1 }}>
        SWITCH THEME TO
      </MUI.Typography>
      <MUI.List>
        {actions.map((btn) => (
          <MUI.ListItem key={btn.text}>
            <Button
              handleClick={btn.action}
              text={btn.text}
              textColor={btn.textColor}
            />
          </MUI.ListItem>
        ))}
      </MUI.List>
    </MUI.Grid>
  )
}

export default ThemeMenu
