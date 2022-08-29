import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MUI from '../muiComponents'

import { AppDispatch, RootState } from '../redux/store'
import { fetchCountriesThunk } from '../redux/slices/countriesSlice'
import ThemeContext, { themes } from '../context/theme-context'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import TableRow from '../components/TableRow'
import TableHeader from '../components/TableHeader'

export default function Home() {
  const { theme, switchTheme } = useContext(ThemeContext)
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  console.log('state', countries)

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  const headers = [
    'Country',
    'Capital',
    'Population',
    'Currencies',
    'Add to Basket',
  ]

  const actions = [
    { action: () => switchTheme(themes.red), color: 'Red' },
    { action: () => switchTheme(themes.blue), color: 'Blue' },
    { action: () => switchTheme(themes.green), color: 'Green' },
  ]

  return (
    <>
      <div className="header">
        <div className="header-btn">
          {actions.map((btn) => (
            <Button
              key={btn.color}
              handleSwitch={btn.action}
              color={btn.color}
            />
          ))}
        </div>
        <Navbar text="Countries" />
      </div>
      <MUI.TableContainer component={MUI.Paper}>
        <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader headers={headers} />
          {countries.isLoading && <MUI.CircularProgress />}
          <MUI.TableBody>
            {countries.items.map((country) => {
              return (
                <TableRow key={country.ccn3} country={country} theme={theme} />
              )
            })}
          </MUI.TableBody>
        </MUI.Table>
      </MUI.TableContainer>
    </>
  )
}
