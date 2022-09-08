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
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

export default function Home() {
  const [sortByName, setSortByName] = useState(true)
  const [sortByPopulation, setSortByPopulation] = useState(true)
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)
  //console.log('STATE FETCH COUNTRIES', countries.items)

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  const handleNameSorting = () => {
    setSortByName((prevState) => !prevState)
    if (sortByName) {
      dispatch(sortByNameAsc(countries))
    } else {
      dispatch(sortByNameDes(countries))
    }
  }

  const handlePopulationSorting = () => {
    setSortByPopulation((prevState) => !prevState)
    if (sortByPopulation) {
      dispatch(sortByPopulationAsc(countries))
    } else {
      dispatch(sortByPopulationDec(countries))
    }
  }

  return (
    <>
      <MUI.Container>
        <MUI.Grid container>
          <MUI.Grid item xs={12}>
            <NavBar text="Countries" />
          </MUI.Grid>
          <MUI.Grid item xs={12}>
            <MUI.TableContainer component={MUI.Paper}>
              <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeader
                  arrowName={
                    sortByName ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                  }
                  nameSort={handleNameSorting}
                  arrowPopulation={
                    sortByPopulation ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    )
                  }
                  populationSort={handlePopulationSorting}
                />
                {/* {countries.isLoading && <MUI.CircularProgress />} */}
                <MUI.TableBody>
                  {countries.items.map((country: any) => {
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
