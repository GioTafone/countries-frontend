import React, { useCallback } from 'react'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { makeStyles } from '@material-ui/core/styles'

import MUI from '../muiComponents'
import { searchByName } from '../redux/slices/countriesSlice'

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>()

  const useStyles = makeStyles({
    input: {
      color: 'white',
    },
  })
  const classes = useStyles()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchByName(e.target.value))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(debounce(handleChange, 1000), [])

  return (
    <MUI.TextField
      id="filled-basic"
      label="Search"
      variant="filled"
      color="primary"
      onChange={debouncedChangeHandler}
      inputProps={{ className: classes.input }}
    />
  )
}

export default SearchBar
