import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type FavouriteCountry = {
  common: string
}

export interface favouriteState {
  countries: FavouriteCountry[]
}

const initialState: favouriteState = {
  countries: [],
}

export const favouriteSlice = createSlice({
  name: 'favouriteCountries',
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<any>) => {
      // console.log('ADD TO FAVOURITE ACTION:', action.payload.name.common)
      const newCountry = action.payload.name.common
      state.countries.push(newCountry)
    },
    removeFromFavourite: (state, action: PayloadAction<any>) => {
      const removeCountry = action.payload
      //console.log('REMOVE FROM FAVOURITE ACTION:', removeCountry)
      const filteredCountries = state.countries.filter(
        (country) => country !== removeCountry
      )
      state.countries = filteredCountries
    },
  },
})

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer
