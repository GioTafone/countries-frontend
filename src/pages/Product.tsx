import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function Product() {
  const { id } = useParams<{ id: string }>()

  const country = useSelector((state: AppState) =>
    state.product.inCart.find((p) => p.id === id)
  )

  if (!country) {
    return <div>Product not found</div>
  }

  return (
    <>
      <h1>Product page</h1>
      <h2>{country.name}</h2>
    </>
  )
}
