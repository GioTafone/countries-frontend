import React from 'react'
import MUI from '../muiComponents'
import { useStyles } from '../styles/themeButtonStyle'

type ButtonProps = {
  text: string
  handleClick: () => void
  textColor: string
}

const Button = ({ handleClick, text, textColor }: ButtonProps) => {
  const classes = useStyles()
  return (
    <MUI.Button
      onClick={handleClick}
      className={classes.root}
      style={{ color: textColor }}
    >
      {text}
    </MUI.Button>
  )
}

export default Button
