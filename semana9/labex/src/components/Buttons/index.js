import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = ({ onClick, type, name, variant, size }) => {
  return (
    <Button
      variant={variant}
      type={type}
      onClick={onClick}
      size={size}
      style={{ margin: '10px' }}
    >
      {name}
    </Button>
  )
}

export default Buttons
