import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context'
import { TextField } from '@mui/material'
import MUI from '../muiComponents'
import PopoverMenu from './PopoverMenu'
import MuiDrawer from '../components/MuiDrawer'

type NavbarProps = {
  text: string
  handleChange: any
}

const Navbar = ({ text, handleChange }: NavbarProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <MUI.Box sx={{ boxShadow: 2 }} style={theme} component={MUI.Paper}>
      <MUI.Grid container direction="row" alignItems="center">
        <MUI.Grid item xs={1}>
          <MuiDrawer />
        </MUI.Grid>
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
        <MUI.Grid item xs={5.7}>
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            color="primary"
            onChange={handleChange}
          />
        </MUI.Grid>
        <MUI.Grid item xs={1.3}>
          <PopoverMenu />
        </MUI.Grid>
      </MUI.Grid>
    </MUI.Box>
  )
}

export default Navbar
