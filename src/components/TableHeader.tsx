import React from 'react'
import MUI from '../muiComponents'
//import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

//const headers = ['Flag', 'Country', 'Capital', 'Population', 'Currencies', ' ']

const TableHeader = ({
  arrowName,
  nameSort,
  populationSort,
  arrowPopulation,
}) => {
  return (
    <MUI.TableHead>
      <MUI.TableRow>
        <MUI.TableCell>Flag</MUI.TableCell>
        <MUI.TableCell>
          Country
          <MUI.IconButton onClick={nameSort}>{arrowName}</MUI.IconButton>
        </MUI.TableCell>
        <MUI.TableCell>Capital</MUI.TableCell>
        <MUI.TableCell>
          Population
          <MUI.IconButton onClick={populationSort}>
            {arrowPopulation}
          </MUI.IconButton>
        </MUI.TableCell>
        <MUI.TableCell>Currencies</MUI.TableCell>
        <MUI.TableCell></MUI.TableCell>
      </MUI.TableRow>
    </MUI.TableHead>
  )
}

export default TableHeader
