import React from 'react'
import MUI from '../muiComponents'

const headers = ['Flag', 'Country', 'Capital', 'Population', 'Currencies', ' ']

const TableHeader = () => {
  return (
    <MUI.TableHead>
      <MUI.TableRow>
        {headers.map((header) => (
          <MUI.TableCell key={header}>{header}</MUI.TableCell>
        ))}
      </MUI.TableRow>
    </MUI.TableHead>
  )
}

export default TableHeader
