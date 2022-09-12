import React, { useState } from 'react'
import { AppDispatch, RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite'

import {
  removeFromFavourite,
  removeAll,
} from '../../redux/slices/favouriteSlice'
import Favourites from '../Favourites/Favourites'
import MUI from '../../muiComponents'
import { useStyles } from './PopoverStyle'

const Popover = () => {
  const { favouriteCountries } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const classes = useStyles()
  const totalFavourites = favouriteCountries.countries.length
  const isEmpty = totalFavourites === 0

  return (
    <>
      <MUI.IconButton
        aria-describedby={id}
        onClick={handleClick}
        color="primary"
        disableRipple={true}
      >
        <MUI.Badge badgeContent={totalFavourites} color="secondary">
          <FavoriteIcon fontSize="large" />
        </MUI.Badge>
      </MUI.IconButton>
      <MUI.Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MUI.Grid container direction="column" alignItems="center">
          <MUI.Grid item>
            {isEmpty ? (
              <MUI.Typography
                sx={{ p: 1 }}
                component="h3"
                variant="h6"
                className={classes.root}
              >
                No favourites
              </MUI.Typography>
            ) : (
              <MUI.Typography
                sx={{ p: 1 }}
                component="h3"
                variant="h6"
                className={classes.root}
              >
                Your favourites
              </MUI.Typography>
            )}
          </MUI.Grid>
          {favouriteCountries.countries.map((country) => {
            return (
              <Favourites
                key={country.flags.png}
                favouriteName={country.name.common}
                handleRemove={() => dispatch(removeFromFavourite(country))}
                flag={country.flags.png}
              />
            )
          })}
          {!isEmpty ? (
            <MUI.Button
              onClick={() => dispatch(removeAll(favouriteCountries.countries))}
              style={{ color: 'red' }}
            >
              {' '}
              REMOVE ALL
            </MUI.Button>
          ) : null}
        </MUI.Grid>
      </MUI.Popover>
    </>
  )
}

export default Popover
