import React, { useContext } from 'react'
import MUI from '../muiComponents'

import ThemeContext from '../context/theme-context'
import { Country } from '../redux/slices/countriesSlice'

type RowProps = {
  country: Country
  theme: { color: string; backgroundColor: string }
}
const TableRow = ({ country }: RowProps) => {
  const { theme } = useContext(ThemeContext)
  const currencies = Object.values(country.currencies).map(
    (currency) => currency.name
  )
  const cells = [
    country.name.common,
    country.capital.join(', '),
    country.population,
    currencies.join(', '),
  ]
  return (
    <MUI.TableRow
      key={country.ccn3}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      {cells.map((cell, i) => {
        return (
          <MUI.TableCell scope="row" key={i}>
            {cell}
          </MUI.TableCell>
        )
      })}
      <MUI.TableCell>
        <MUI.Button
          onClick={() => console.log('Clicked')}
          variant="contained"
          style={theme}
        >
          Add
        </MUI.Button>
      </MUI.TableCell>
    </MUI.TableRow>
  )
}

export default TableRow
