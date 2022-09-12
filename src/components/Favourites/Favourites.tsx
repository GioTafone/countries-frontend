import React from 'react'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'

import MUI from '../../muiComponents'
import { useStyles } from './FavouritesStyle'

type CartProps = {
  favouriteName: {}
  handleRemove: () => void
  flag: string
}

const Favourites = ({ favouriteName, handleRemove, flag }: CartProps) => {
  const classes = useStyles()
  return (
    <MUI.Grid container direction="row" sx={{ p: 1 }} alignItems="center">
      <MUI.Grid item xs={3}>
        <img src={flag} alt="flag" />
      </MUI.Grid>
      <MUI.Grid item xs={5}>
        <MUI.Typography className={classes.root} sx={{ p: 1 }}>
          {favouriteName}
        </MUI.Typography>
      </MUI.Grid>
      <MUI.Grid item xs={2} sx={{ p: 1 }}>
        <MUI.IconButton onClick={handleRemove}>
          <DeleteRoundedIcon color="error" />
        </MUI.IconButton>
      </MUI.Grid>
    </MUI.Grid>
  )
}

export default Favourites
