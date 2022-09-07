import * as React from 'react'
import MUI from '../muiComponents'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { removeFromFavourite } from '../redux/slices/favouriteSlice'

import FavoriteIcon from '@material-ui/icons/Favorite'

const PopoverMenu = () => {
  const { favouriteCountries } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const totalFavourites = favouriteCountries.countries.length
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

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
              <MUI.Typography sx={{ p: 1 }} variant="h6">
                NO FAVORITE COUNTRIES
              </MUI.Typography>
            ) : (
              <MUI.Typography sx={{ p: 1 }} variant="h6">
                FAVOURITE COUNTRIES
              </MUI.Typography>
            )}
          </MUI.Grid>
          <MUI.Grid item>
            <MUI.Typography sx={{ p: 2 }} variant="body2">
              {favouriteCountries.countries.map((country, i) => {
                return (
                  <Cart
                    key={i}
                    countryFav={country}
                    handleRemove={() => dispatch(removeFromFavourite(country))}
                  />
                )
              })}
            </MUI.Typography>
          </MUI.Grid>
        </MUI.Grid>
      </MUI.Popover>
    </>
  )
}

export default PopoverMenu
