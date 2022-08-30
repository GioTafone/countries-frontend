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
    'Flag',
    'Country',
    'Capital',
    'Population',
    'Currencies',
    ' ',
  ]

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
    <>
      <MUI.Container>
        <MUI.Grid container>
          <MUI.Grid item xs={12}>
            {actions.map((btn) => (
              <Button
                key={btn.text}
                handleSwitch={btn.action}
                text={btn.text}
                textColor={btn.textColor}
              />
            ))}
          </MUI.Grid>
          <MUI.Grid item xs={12}>
            <Navbar text="Countries" />
          </MUI.Grid>
          <MUI.Grid item xs={12}>
            <MUI.TableContainer component={MUI.Paper}>
              <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeader headers={headers} />
                {countries.isLoading && <MUI.CircularProgress />}
                <MUI.TableBody>
                  {countries.items.map((country) => {
                    return (
                      <TableRow
                        key={country.ccn3}
                        country={country}
                        theme={theme}
                      />
                    )
                  })}
                </MUI.TableBody>
              </MUI.Table>
            </MUI.TableContainer>
          </MUI.Grid>
        </MUI.Grid>
      </MUI.Container>
    </>
  )
}
