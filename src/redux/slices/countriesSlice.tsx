import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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
    console.log('response', res)
    return {
      data: res.data,
      status: res.status,
    }
  }
)

export const counterSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      console.log('action:', action)
      state.items = action.payload.data
      state.isLoading = false
    })
  },
})

export default counterSlice.reducer
