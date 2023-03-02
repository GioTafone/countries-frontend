import { Typography } from '@material-ui/core'
import React from 'react'

import MUI from '../../muiComponents'
import { useStyles } from './TableHeaderStyle'

const TableHeader = ({
  arrowName,
  nameSort,
  populationSort,
  arrowPopulation,
}) => {
  const classes = useStyles()

  return (
    <MUI.TableHead>
      <MUI.TableRow>
        <MUI.TableCell>
          <MUI.Typography
            component="h4"
            variant="overline"
            className={classes.root}
          >
            Flag
          </MUI.Typography>
        </MUI.TableCell>
        <MUI.TableCell>
          <MUI.Typography
            component="h4"
            variant="overline"
            className={classes.root}
          >
            Country{' '}
            <MUI.IconButton onClick={nameSort}>{arrowName}</MUI.IconButton>
          </MUI.Typography>
        </MUI.TableCell>
        <MUI.TableCell>
          <MUI.Typography
            component="h4"
            variant="overline"
            className={classes.root}
          >
            Capital
          </MUI.Typography>
        </MUI.TableCell>
        <MUI.TableCell>
          <Typography
            component="h4"
            variant="overline"
            className={classes.root}
          >
            Population
          </Typography>
          <MUI.IconButton onClick={populationSort}>
            {arrowPopulation}
          </MUI.IconButton>
        </MUI.TableCell>
        <MUI.TableCell>
          <Typography
            component="h4"
            variant="overline"
            className={classes.root}
          >
            Currencies
          </Typography>
        </MUI.TableCell>
        <MUI.TableCell></MUI.TableCell>
      </MUI.TableRow>
    </MUI.TableHead>
  )
}

export default TableHeader
