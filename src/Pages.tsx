import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Country from './pages/Country'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/country/:id" element={<Country />} />
  </Routes>
)

export default Pages

// <Route exact path="/country/:id" component={Country} />
