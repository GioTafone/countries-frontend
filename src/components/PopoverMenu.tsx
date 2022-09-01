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

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <MUI.Button
        aria-describedby={id}
        onClick={handleClick}
        color="primary"
        disableRipple={true}
      >
        <FavoriteIcon fontSize="large" />
      </MUI.Button>
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
        <MUI.Typography sx={{ p: 2 }}>
          <MUI.Typography sx={{ p: 1 }}>FAVOURITE COUNTRIES</MUI.Typography>
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
      </MUI.Popover>
    </>
  )
}

export default PopoverMenu
