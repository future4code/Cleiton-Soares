import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import TripCard from '../child-components/tripCard'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { useRequestData } from '../../hooks/useRequestData'

export default function AdminHome() {
  const { goHome, goTripDetails } = useGoRoutes()
  useProtectedPage()

  const [tripsList, isLoading] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips'
  )

  const showTrips =
    tripsList &&
    tripsList.trips.map((trip) => {
      return (
        <TripCard
          onClick={() => {
            goTripDetails(trip.id)
          }}
          key={trip.id}
          id={trip.id}
          name={trip.name}

        />
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
