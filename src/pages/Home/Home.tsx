import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import './Home.css'

import { fetchCountriesThunk } from '../../redux/slices/countriesSlice'
import ThemeContext, { themes } from '../../context/theme-context'
import Navbar from '../../components/Navbar/Navbar'
import ButtonCustom from '../../components/Button/ButtonCustom'
import { AppDispatch, RootState } from '../../redux/store'

export default function Home() {
  const [theme, setTheme] = useState(themes.red)

  const switchTheme = (theme: any) => {
    setTheme(theme)
  }

  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state)
  console.log('state', state)

  return (
    <>
      <div>
        <h1>Home page</h1>
      </div>
      <div className="header">
        <div className="header-btn">
          <ButtonCustom
            handleSwitch={() => switchTheme(themes.red)}
            color="Red"
          />
          <ButtonCustom
            handleSwitch={() => switchTheme(themes.blue)}
            color="Blue"
          />
          <ButtonCustom
            handleSwitch={() => switchTheme(themes.green)}
            color="Green"
          />
        </div>
        <ThemeContext.Provider value={theme}>
          <Navbar text="Countries" />
        </ThemeContext.Provider>
      </div>
      <ThemeContext.Provider value={theme}>
        <Button
          onClick={() => dispatch(fetchCountriesThunk())}
          variant="contained"
          style={theme}
        >
          Add product
        </Button>
      </ThemeContext.Provider>
    </>
  )
}
