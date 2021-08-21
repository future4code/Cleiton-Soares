import React, { useEffect, useState } from 'react'
import InfoTrip from '../child-components/infoTrip'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { useGet } from '../../hooks/services/useGet'

export default function ListTrips() {
  const { goHome, goApplicationForm } = useGoRoutes()
  const { data, isLoading, error, get } = useGet('trips')
  const [tripList, setTripList] = useState([])

  useEffect(() => {
    get()
  }, [])

  useEffect(() => {
    data && setTripList(data.trips)
  }, [data])

  return (
    <div>
      <button onClick={goHome}>Voltar</button>
      <button onClick={goApplicationForm}>Inscrever-se</button>
      <h1>Lista de viagens</h1>

      {isLoading && <p>Carregando...</p>}
      {error && <p>Algo deu errado</p>}

      {tripList.map((trip) => (
          <InfoTrip
            key={trip.id}
            name={trip.name}
            description={trip.description}
            planet={trip.planet}
            durationInDays={trip.durationInDays}
            date={trip.date}
          />
        ))}
    </div>
  )
}
