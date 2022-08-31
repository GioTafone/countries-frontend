import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import countriesReducer from './slices/countriesSlice'
import favouriteReducer from './slices/favouriteSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    favouriteCountries: favouriteReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
