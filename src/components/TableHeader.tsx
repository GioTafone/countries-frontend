import React from 'react'
import MUI from '../muiComponents'

type TableHeaderProps = {
  headers: string[]
}

const TableHeader = ({ headers }: TableHeaderProps) => {
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
