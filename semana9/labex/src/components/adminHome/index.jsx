import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import TripCard from '../child-components/tripCard'
import useRequestData from '../../hooks/useRequestData'
import { Button } from 'react-bootstrap'

export default function AdminHome() {
  const { goTripDetails } = useGoRoutes()
  useProtectedPage()

  const [tripList, setTripList] = useState([])
  const [data, isLoading, error, request] = useRequestData()

  useEffect(() => {
    request(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips',
      '',
      '',
      'get'
    )
  }, [])

  useEffect(() => {
    data && setTripList(data.data.trips)
  }, [data])

  const handleDelete = (data) => {
    setTripList(tripList.filter((element)=> element.id !== data.id))
  }

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <div>
        <Link to='/'>
          <Button variant="secondary">Voltar</Button>
        </Link>
        <Button variant='primary'>Criar Viagem</Button>
        <Button variant='outline-secondary' >Logout</Button>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Algo deu errado</p>}
        {!isLoading && !error &&
          tripList &&
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
