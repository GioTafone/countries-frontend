import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../redux/store'
import { fetchCountriesThunk } from '../redux/slices/countriesSlice'
import {
  addToFavourite,
  removeFromFavourite,
} from '../redux/slices/favouriteSlice'
import ThemeContext, { themes } from '../context/theme-context'
import { NavBar, Button, TableRow, TableHeader, Test } from '../components'
import MUI from '../muiComponents'

export default function Home() {
  const { theme, switchTheme } = useContext(ThemeContext)
  const dispatch = useDispatch<AppDispatch>()
  const { countries, favouriteCountries } = useSelector(
    (state: RootState) => state
  )
  //console.log('STATE FETCH COUNTRIES', countries)
  //console.log('STATE FAVOURITE', favouriteCountries)

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
      {favouriteCountries.countries.map((country, i) => {
        return (
          <Test
            key={i}
            countryFav={country}
            handleRemove={() => dispatch(removeFromFavourite(country))}
          />
        )
      })}
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
            <NavBar text="Countries" />
          </MUI.Grid>
          <MUI.Grid item xs={12}>
            <MUI.TableContainer component={MUI.Paper}>
              <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeader headers={headers} />
                {/* {countries.isLoading && <MUI.CircularProgress />} */}
                <MUI.TableBody>
                  {countries.items.map((country) => {
                    return (
                      <TableRow
                        key={country.ccn3}
                        country={country}
                        theme={theme}
                        handleAddToFavourite={() =>
                          dispatch(addToFavourite(country))
                        }
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
