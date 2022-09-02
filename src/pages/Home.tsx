import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'

import { fetchCountriesThunk } from '../redux/slices/countriesSlice'
import { addToFavourite } from '../redux/slices/favouriteSlice'
import ThemeContext from '../context/theme-context'
import { NavBar, TableRow, TableHeader, SwitchTheme } from '../components'
import MUI from '../muiComponents'

export default function Home() {
  const [search, setSearch] = useState('')
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  //console.log('STATE FETCH COUNTRIES', countries)

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCountries = countries.items.filter((country) => {
    const searchCountry = search.toLowerCase()
    const countryName = country.name.common.toLowerCase()
    return searchCountry ? countryName.startsWith(searchCountry) : country
  })

  return (
    <>
      <MUI.Container>
        <MUI.Grid container>
          <MUI.Grid item xs={12}>
            <SwitchTheme />
          </MUI.Grid>
          <MUI.Grid item xs={12}>
            <NavBar text="Countries" handleChange={onChange} />
          </MUI.Grid>
          <MUI.Grid item xs={12}>
            <MUI.TableContainer component={MUI.Paper}>
              <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeader />
                {/* {countries.isLoading && <MUI.CircularProgress />} */}
                <MUI.TableBody>
                  {filteredCountries.map((country) => {
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
