import React from 'react'
import InfoTrip from '../child-components/infoTrip'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'

export default function ListTrips() {
  const history = useHistory()

  const [trips] = useRequestData(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips'
  )

  const showTrips = trips && trips.trips.map((trip) => {
    return (
      <InfoTrip
        key={trip.id}
        nome={trip.name}
        descricao={trip.description}
        planeta={trip.planet}
        duracao={trip.durationInDays}
        data={trip.date}
      />
    )
  })

  const goHome = () => {
    history.push('/')
  }

  const goApplicationForm = () => {
    history.push('/trips/application')
  }

  return (
    <div>
      <button onClick={goHome}>Voltar</button>
      <button onClick={goApplicationForm}>Inscrever-se</button>
      <h1>Lista de viagens</h1>
      {trips && showTrips}
    </div>
  )
}
