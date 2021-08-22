import React, { useEffect, useState } from 'react'
import InfoTrip from './InfoTrip'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { useGet } from '../../services/useGet'
import Buttons from '../../components/Buttons'
import * as G from '../../styles/styles'

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
      <G.CentralizedDiv>
        <h1>Lista de viagens</h1>
      </G.CentralizedDiv>
      <G.CentralizedDiv>
        <Buttons onClick={goHome} name='Voltar' />
        <Buttons
          onClick={goApplicationForm}
          name='Inscrever-se'
          variant='outline-primary'
        />
      </G.CentralizedDiv>

      {isLoading && <p>Carregando...</p>}
      {error && <p>Algo deu errado</p>}

      {!isLoading && tripList.length === 0 && <p>Nenhuma viagem encontrada.</p>}

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
