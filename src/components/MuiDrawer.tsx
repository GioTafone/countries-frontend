import React, { useState } from 'react'
import { Drawer, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MUI from '../muiComponents'
import { SwitchTheme } from '../components'

const MuiDrawer = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MUI.Button onClick={() => setOpen(true)} color="primary">
        <MenuIcon fontSize="large" />
      </MUI.Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <MUI.Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            <SwitchTheme />
          </Typography>
        </MUI.Box>
      </Drawer>
    </>
  )
}

export default MuiDrawer
