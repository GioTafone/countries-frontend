import React, { useState } from 'react'
import { Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import MUI from '../muiComponents'
import { ThemeMenu } from './'

const MuiDrawer = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MUI.IconButton
        onClick={() => setOpen(true)}
        color="primary"
        aria-expanded="false"
        aria-label="Switch Theme"
      >
        <MenuIcon fontSize="large" />
      </MUI.IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <MUI.Box p={2} width="250px" textAlign="center">
          <ThemeMenu />
        </MUI.Box>
      </Drawer>
    </>
  )
}

export default MuiDrawer
