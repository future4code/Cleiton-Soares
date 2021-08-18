import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import TripCard from '../child-components/tripCard'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { useRequestData } from '../../hooks/useRequestData'

export default function AdminHome() {
  const { goHome } = useGoRoutes()
  useProtectedPage()

  const [tripsList, isLoading] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips'
  )

  const [tripId, setTripId] = React.useState('')
  console.log(tripId)

  const showTrips =
    tripsList &&
    tripsList.trips.map((trip) => {
      return (
        <TripCard
          key={trip.id}
          name={trip.name}
          description={trip.description}
          planet={trip.planet}
          durationInDays={trip.durationInDays}
          date={trip.date}
        >
          {trip.name}
          <button>Apagar</button>
        </TripCard>
      )
    })

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <div>
        <button onClick={goHome}>Voltar</button>
        <button>Criar Viagem</button>
        <button>Logout</button>
        {isLoading ? <p>Carregando...</p> : tripsList && showTrips}
      </div>
    </div>
  )
}
