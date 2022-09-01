import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ThemeContext from '../context/theme-context'
import { TextField } from '@mui/material'
import MUI from '../muiComponents'
import PopoverMenu from './PopoverMenu'

type NavbarProps = {
  text: string
}

const Navbar = ({ text }: NavbarProps) => {
  const { favouriteCountries } = useSelector((state: RootState) => state)
  const { theme } = useContext(ThemeContext)
  const totalFavourites = favouriteCountries.countries.length

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
        <MUI.Grid item xs={6.7}>
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            color="primary"
          />
        </MUI.Grid>
        <MUI.Grid item xs={1.3}>
          <MUI.Typography>{totalFavourites}</MUI.Typography>
          <PopoverMenu />
        </MUI.Grid>
      </MUI.Grid>
    </MUI.Box>
  )
}

export default Navbar
