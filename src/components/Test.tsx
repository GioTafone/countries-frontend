import React from 'react'

const Test = ({ countryFav, handleRemove }: any) => {
  return (
    <div>
      <p>{countryFav}</p>
      <button onClick={handleRemove}>REMOVE</button>
    </div>
  )
}

export default Test
