import React from 'react'
import MUI from '../muiComponents'

type CartProps = {
  countryFav: {}
  handleRemove: () => void
}

const Cart = ({ countryFav, handleRemove }: CartProps) => {
  return (
    <MUI.Grid container direction="row" sx={{ p: 1 }}>
      <MUI.Grid item xs={6}>
        <MUI.Typography align="justify">{countryFav}</MUI.Typography>
      </MUI.Grid>
      <MUI.Grid item xs={4}>
        <MUI.Button onClick={handleRemove} variant="outlined" color="secondary">
          Remove
        </MUI.Button>
      </MUI.Grid>
    </MUI.Grid>
  )
}

export default Cart
