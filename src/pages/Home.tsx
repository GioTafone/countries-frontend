import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'

import { fetchCountriesThunk } from '../redux/slices/countriesSlice'
import { addToFavourite } from '../redux/slices/favouriteSlice'
import {
  sortByNameAsc,
  sortByNameDes,
  sortByPopulationAsc,
  sortByPopulationDec,
} from '../redux/slices/countriesSlice'
import ThemeContext from '../context/theme-context'
import { NavBar, TableRow, TableHeader } from '../components'
import MUI from '../muiComponents'

export default function Home() {
  const [search, setSearch] = useState('')
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  //console.log('STATE FETCH COUNTRIES', countries.items)

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const handleNameSortAsc = () => {
    dispatch(sortByNameAsc(countries))
  }

  const handleNameSortDes = () => {
    dispatch(sortByNameDes(countries))
  }

  const handlePopulationSortDes = () => {
    dispatch(sortByPopulationAsc(countries))
  }

  const handlePopulationSortAsc = () => {
    dispatch(sortByPopulationDec(countries))
  }

  const filteredCountries = countries.items
    .filter((country) => {
      const searchCountry = search.toLowerCase()
      const countryName = country.name.common.toLowerCase()
      return searchCountry ? countryName.startsWith(searchCountry) : country
    })
    .sort()

  return (
    <>
      <MUI.Container>
        <MUI.Grid container>
          <MUI.Grid item xs={12}></MUI.Grid>
          <MUI.Grid item xs={12}>
            <NavBar text="Countries" handleChange={onChange} />
            <button onClick={() => handleNameSortAsc()}>Click</button>
            <button onClick={() => handleNameSortDes()}>Click</button>
            <button onClick={() => handlePopulationSortDes()}>Click</button>
            <button onClick={() => handlePopulationSortAsc()}>Click</button>
          </MUI.Grid>
          <MUI.Grid item xs={12}>
            <MUI.TableContainer component={MUI.Paper}>
              <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeader />
                {/* {countries.isLoading && <MUI.CircularProgress />} */}
                <MUI.TableBody>
                  {filteredCountries
                    .map((country) => {
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
                    })
                    .sort()}
                </MUI.TableBody>
              </MUI.Table>
            </MUI.TableContainer>
          </MUI.Grid>
        </MUI.Grid>
      </MUI.Container>
    </>
  )
}
