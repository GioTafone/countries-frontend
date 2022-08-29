import React from 'react'

type ButtonProps = {
  color: string
  handleSwitch: () => void
}

const Button = ({ handleSwitch, color }: ButtonProps) => {
  return (
    <button className="btn" onClick={handleSwitch}>
      Switch to {color}
    </button>
  )
}

export default Button
