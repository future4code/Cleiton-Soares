import React from 'react'
import InfoTrip from '../child-components/infoTrip'
import { useRequestData } from '../../hooks/useRequestData'
import { useGoRoutes } from '../../hooks/useGoRoutes'

export default function ListTrips() {
  const { goHome, goApplicationForm } = useGoRoutes()

  const [trips, isLoading] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips'
  )

  const showTrips =
    trips &&
    trips.trips.map((trip) => {
      return (
        <InfoTrip
          key={trip.id}
          name={trip.name}
          description={trip.description}
          planet={trip.planet}
          durationInDays={trip.durationInDays}
          date={trip.date}
        />
      )
    })

  return (
    <div>
      <button onClick={goHome}>Voltar</button>
      <button onClick={goApplicationForm}>Inscrever-se</button>
      <h1>Lista de viagens</h1>
      {isLoading ? <p>Carregando...</p> : trips && showTrips}
    </div>
  )
}
