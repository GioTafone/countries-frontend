import React, { useContext } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

import ThemeContext from '../context/theme-context'
import { Country } from '../types'
import MUI from '../muiComponents'

type TableRowProps = {
  country: Country
  theme: { color: string; backgroundColor: string }
  handleAddToFavourite: () => void
}

const TableRow = ({ country, handleAddToFavourite }: TableRowProps) => {
  const { theme } = useContext(ThemeContext)

  const currencies = Object.values(country.currencies).map(
    (currency) => currency.name
  )

  const cells = [
    country.name.official,
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
        <img src={country.flags.png} alt={country.name.official} />
      </MUI.TableCell>
      {cells.map((cell, i) => {
        return (
          <MUI.TableCell scope="row" key={i}>
            <Link
              to={`/country/${cells[0]}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <MUI.Typography>{cell}</MUI.Typography>
            </Link>
          </MUI.TableCell>
        )
      })}
      <MUI.TableCell>
        <MUI.Button
          onClick={handleAddToFavourite}
          variant="contained"
          style={theme}
          endIcon={<AddIcon fontSize="small" />}
        >
          Add
        </MUI.Button>
      </MUI.TableCell>
    </MUI.TableRow>
  )
}

export default TableRow
