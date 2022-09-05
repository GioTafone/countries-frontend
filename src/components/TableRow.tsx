import React, { useContext } from 'react'
import MUI from '../muiComponents'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

import ThemeContext from '../context/theme-context'
import { Country } from '../redux/slices/countriesSlice'

type RowProps = {
  country: Country
  theme: { color: string; backgroundColor: string }
  handleAddToFavourite: () => void
}

const TableRow = ({ country, handleAddToFavourite }: RowProps) => {
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
      <MUI.TableCell scope="row">
        <img src={country.flags.png} alt={country.name.common} />
      </MUI.TableCell>
      {cells.map((cell, i) => {
        return (
          <MUI.TableCell scope="row" key={i}>
            <Link to={`/country/${cells[0]}`}>{cell}</Link>
          </MUI.TableCell>
        )
      })}
      <MUI.TableCell>
        <MUI.Button
          onClick={handleAddToFavourite}
          variant="contained"
          style={theme}
          endIcon={<AddIcon />}
        >
          Add
        </MUI.Button>
      </MUI.TableCell>
    </MUI.TableRow>
  )
}

export default TableRow
