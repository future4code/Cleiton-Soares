import React from 'react'
import InfoTrip from '../child-components/infoTrip'
import { useHistory } from 'react-router-dom'

export default function ListTrips() {
  const history = useHistory()

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
      <InfoTrip
        nome={'nome'}
        descricao={'descrição'}
        planeta={'planeta'}
        duracao={'duração'}
        data={'data'}
      />
    </div>
  )
}
