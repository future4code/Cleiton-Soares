import React, { useEffect, useState } from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { useGet } from '../../services/useGet'
import TripCard from './TripCard'
import Buttons from '../../components/Buttons'
import * as S from '../../styles/styles'
import ReactLoading from 'react-loading'

export default function AdminHome() {
  const { goTripDetails, goCreateTrip, goLogin, goHome } = useGoRoutes()
  const { data, isLoading, error, get } = useGet('trips')
  useProtectedPage()

  const [tripList, setTripList] = useState([])

  useEffect(() => {
    get()
  }, [])

  useEffect(() => {
    data && setTripList(data.trips)
  }, [data])

  const handleDelete = (data) => {
    setTripList(tripList.filter((element) => element.id !== data.id))
  }

  const logout = () => {
    localStorage.removeItem('token')
    goLogin()
  }

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <div>
        <S.CentralizedDiv>
          <Buttons variant='outline-primary' onClick={goHome} name='Voltar' />
          <Buttons
            variant='primary'
            onClick={goCreateTrip}
            name='Criar Viagem'
          />
          <Buttons variant='outline-danger' onClick={logout} name='Logout' />
        </S.CentralizedDiv>

        {isLoading && (
          <S.CentralizedDiv>
            <ReactLoading
              type={'spin'}
              color={'#0d6efd'}
              height={50}
              width={50}
            />
          </S.CentralizedDiv>
        )}
        {error && <p>Algo deu errado. </p>}

        {!isLoading && tripList.length === 0 && (
          <p>Nenhuma viagem encontrada.</p>
        )}

        {!isLoading &&
          !error &&
          tripList.map((trip) => (
            <TripCard
              onClick={() => goTripDetails(trip.id)}
              onDelete={handleDelete}
              key={trip.id}
              id={trip.id}
              name={trip.name}
            />
          ))}
      </div>
    </div>
  )
}
