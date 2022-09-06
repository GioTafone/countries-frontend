import React, { useContext } from 'react'
import ThemeContext, { themes } from '../context/theme-context'
import MUI from '../muiComponents'
import { Button } from '.'
import { Typography } from '@material-ui/core'

const SwitchTheme = () => {
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
      <Typography align="center">SWITCH THEME TO</Typography>
      {actions.map((btn) => (
        <Typography key={btn.text} variant="h3">
          <Button
            handleClick={btn.action}
            text={btn.text}
            textColor={btn.textColor}
          />
        </Typography>
      ))}
    </MUI.Grid>
  )
}

export default SwitchTheme
