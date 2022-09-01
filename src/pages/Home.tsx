import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'

import { fetchCountriesThunk } from '../redux/slices/countriesSlice'
import { addToFavourite } from '../redux/slices/favouriteSlice'
import ThemeContext from '../context/theme-context'
import { NavBar, TableRow, TableHeader, SwitchTheme } from '../components'
import MUI from '../muiComponents'

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  //console.log('STATE FETCH COUNTRIES', countries)

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

  return (
    <>
      <MUI.Container>
        <MUI.Grid container>
          <MUI.Grid item xs={12}>
            <SwitchTheme />
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
