import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = ({ onClick, type, name, variant }) => {
  return (
    <Button variant={variant} type={type} onClick={onClick}>
      {name}
    </Button>
  )
}

export default Buttons
