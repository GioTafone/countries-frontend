import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export type Country = {
  name: {
    common: string
  }
  capital: string[]
  currencies: {
    [key: string]: {
      name: string
    }
  }
  population: number
  ccn3: number
  flags: {
    png: string
  }
}

export interface CountriesState {
  items: Country[]
  isLoading: boolean
}

const initialState: CountriesState = {
  items: [],
  isLoading: false,
}

export const fetchCountriesThunk = createAsyncThunk(
  'countries/fetch',
  async () => {
    const url =
      'https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,flags,ccn3'

    const res = await axios.get(url)

    //console.log('response', res)
    return {
      data: res.data,
      status: res.status,
    }
  }
)

export const counterSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    sortByNameAsc: (state, action: PayloadAction<any>) => {
      const mapCountry = action.payload.items.map((country: object) => {
        return country
      })
      const sortedCountries = mapCountry.sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      )
      state.items = sortedCountries
    },
    sortByNameDes: (state, action: PayloadAction<any>) => {
      const mapCountry = action.payload.items.map((country: object) => {
        return country
      })
      const sortedCountries = mapCountry.sort((a, b) =>
        a.name.common > b.name.common ? -1 : 1
      )
      state.items = sortedCountries
    },
    sortByPopulationAsc: (state, action: PayloadAction<any>) => {
      const mapCountry = action.payload.items.map((country: object) => {
        return country
      })
      const sortedCountries = mapCountry.sort((a, b) =>
        a.population > b.population ? -1 : 1
      )
      state.items = sortedCountries
    },
    sortByPopulationDec: (state, action: PayloadAction<any>) => {
      const mapCountry = action.payload.items.map((country: object) => {
        return country
      })
      const sortedCountries = mapCountry.sort((a, b) =>
        a.population > b.population ? 1 : -1
      )
      state.items = sortedCountries
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      //console.log('COUNTRIES SLICE ACTION:', action)
      state.items = action.payload.data
      state.isLoading = false
    })
  },
})

export const {
  sortByNameAsc,
  sortByNameDes,
  sortByPopulationAsc,
  sortByPopulationDec,
} = counterSlice.actions

export default counterSlice.reducer
