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
    <>
      <MUI.Box
        sx={{ boxShadow: 2, p: 1.5 }}
        style={theme}
        component={MUI.Paper}
      >
        <MUI.Grid container direction="row" alignItems="center">
          <MuiDrawer />
          <MUI.Grid item xs={4}>
            <MUI.Typography variant="h4" component="h1" m={2}>
              {text}
            </MUI.Typography>
          </MUI.Grid>
          <MUI.Grid item xs={6}>
            <TextField
              id="filled-basic"
              label="Search"
              variant="filled"
              color="primary"
              onChange={handleChange}
            />
          </MUI.Grid>
          <MUI.Grid item xs={1}>
            <PopoverMenu />
          </MUI.Grid>
        </MUI.Grid>
      </MUI.Box>
    </>
  )
}

export default Navbar
