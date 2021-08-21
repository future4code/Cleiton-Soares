import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { Button } from 'react-bootstrap'
import { useGet } from '../../hooks/services/useGet'
import TripCard from '../child-components/tripCard'

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
        <Button variant='secondary' onClick={goHome}>
          Voltar
        </Button>

        <Button variant='primary' onClick={goCreateTrip}>
          Criar Viagem
        </Button>

        <Button variant='outline-secondary' onClick={logout}>
          Logout
        </Button>

        {isLoading && <p>Carregando...</p>}
        {error && <p>Algo deu errado. </p>}

        {tripList.map((trip) => (
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
