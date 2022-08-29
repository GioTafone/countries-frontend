import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'

type NavbarProps = {
  text: string
}

const Navbar = ({ text }: NavbarProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Box sx={{ boxShadow: 2 }} className="navbar" style={theme}>
      <h1 className="navbar-title">{text}</h1>
      <TextField id="filled-basic" label="Search" variant="filled" />
    </Box>
  )
}

export default Navbar
