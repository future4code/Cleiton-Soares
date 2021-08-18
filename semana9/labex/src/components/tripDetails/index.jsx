import React from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'


export default function TripDetails() {
  useProtectedPage()
  return (
    <div>
      TripDetails
    </div>
  )
}
