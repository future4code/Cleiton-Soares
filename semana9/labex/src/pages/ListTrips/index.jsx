import React, { useEffect, useState } from 'react'
import InfoTrip from './InfoTrip'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { useGet } from '../../services/useGet'
import Buttons from '../../components/Buttons'
import * as S from '../../styles/styles'
import ReactLoading from 'react-loading'

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
      <S.CentralizedDiv>
        <h1>Lista de viagens</h1>
      </S.CentralizedDiv>
      <S.CentralizedDiv>
        <Buttons onClick={goHome} name='Voltar' />
        <Buttons
          onClick={goApplicationForm}
          name='Inscrever-se'
          variant='outline-primary'
        />
      </S.CentralizedDiv>

      {isLoading && (
        <S.CentralizedDiv>
            <ReactLoading
              type={'spin'}
              color={'#0d6efd'}
              height={50}
              width={50}
            />
          </S.CentralizedDiv>      )}
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
