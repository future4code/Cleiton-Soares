import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'

export default function CreateTrip() {
  useProtectedPage()
  return <div>CreateTrip</div>
}
