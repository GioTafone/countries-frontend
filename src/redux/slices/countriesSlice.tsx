import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface CountriesState {
  value: number
}

const initialState: CountriesState = {
  value: 0,
}

export const fetchCountriesThunk = createAsyncThunk(
  'countries/fetch',
  async () => {
    const url =
      'https://restcountries.com/v3.1/all?fields=name,languages,capital,currencies'

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
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      console.log('action:', action)
    })
  },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
