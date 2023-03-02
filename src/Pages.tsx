import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SingleCountry from './pages/SingleCountry/SingleCountry'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/country/:id" element={<SingleCountry />} />
  </Routes>
)

export default Pages
