import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {

  const history = useHistory()

  const goListTrips = () => {
    history.push('/trips/list')
  }

  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={goListTrips}>Ver viagens</button>
      <button>Área de admin</button>
    </div>
  )
}
