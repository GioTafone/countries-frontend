import React from 'react'
import MUI from '../muiComponents'
import { useStyles } from '../styles/buttonStyle'

type ButtonProps = {
  text: string
  handleSwitch: () => void
  textColor: string
}

const Button = ({ handleSwitch, text, textColor }: ButtonProps) => {
  const classes = useStyles()
  return (
    <MUI.Button onClick={handleSwitch} className={classes.root}>
      <MUI.Typography>
        Switch to <span style={{ color: textColor }}>{text}</span>
      </MUI.Typography>
    </MUI.Button>
  )
}

export default Button
