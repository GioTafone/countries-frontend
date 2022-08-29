import React from 'react'

type ButtonProps = {
  color: string
  handleSwitch: () => void
}

const ButtonCustom = ({ handleSwitch, color }: ButtonProps) => {
  return (
    <div>
      <button onClick={handleSwitch}>Switch to {color}</button>
    </div>
  )
}

export default ButtonCustom
