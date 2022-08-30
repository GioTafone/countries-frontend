import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context'
import { TextField } from '@mui/material'
import MUI from '../muiComponents'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

type NavbarProps = {
  text: string
}

const Navbar = ({ text }: NavbarProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <MUI.Box sx={{ boxShadow: 2 }} style={theme} component={MUI.Paper}>
      <MUI.Grid container direction="row" alignItems="center">
        <MUI.Grid item xs={4}>
          <MUI.Typography
            variant="h4"
            component="h1"
            align="justify"
            m={2}
            gutterBottom
          >
            {text}
          </MUI.Typography>
        </MUI.Grid>
        <MUI.Grid item xs={7}>
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            color="secondary"
          />
        </MUI.Grid>
        <MUI.Grid item xs={1}>
          <ShoppingCartIcon />
        </MUI.Grid>
      </MUI.Grid>
    </MUI.Box>
  )
}

export default Navbar
