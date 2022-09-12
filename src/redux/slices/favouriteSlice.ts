import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Country } from '../../types'
import { FavouriteState } from '../../types'

const initialState: FavouriteState = {
  countries: [],
}

export const favouriteSlice = createSlice({
  name: 'favouriteCountries',
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<Country>) => {
      const { name, flags } = action.payload
      const country = { name, flags }

      if (!state.countries.some((e) => e.name.common === country.name.common)) {
        state.countries = [...state.countries, country]
      } else {
        state.countries = [...state.countries]
        alert(`${name.common} already into Favourites`)
      }
    },
    removeFromFavourite: (state, action) => {
      const removeCountry = action.payload.name.common
      const filteredCountries = state.countries.filter(
        (country) => country.name.common !== removeCountry
      )
      state.countries = filteredCountries
    },
    removeAll: (state, action) => {
      const deleteCountries = state.countries.filter(
        (country) => country === action.payload
      )
      state.countries = deleteCountries
    },
  },
})

export const { addToFavourite, removeFromFavourite, removeAll } =
  favouriteSlice.actions

export default favouriteSlice.reducer
