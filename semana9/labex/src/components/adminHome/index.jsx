import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import TripCard from '../child-components/tripCard'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import useRequestData from '../../hooks/useRequestData'

export default function AdminHome() {
  const { goTripDetails } = useGoRoutes()
  useProtectedPage()

  const [tripsList, isLoading, error, request] = useRequestData()

  useEffect(() => {
    request(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips',
      undefined,
      undefined,
      'get'
    )
  }, [request])

  const showTrips =
    tripsList &&
    tripsList.data.trips.map((trip) => {
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
        <Link to='/'>
          <button>Voltar</button>
        </Link>
        <button>Criar Viagem</button>
        <button>Logout</button>
        {isLoading ? <p>Carregando...</p> : tripsList && showTrips}
      </div>
    </div>
  )
}
