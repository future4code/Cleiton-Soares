import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import CandidateCard from '../child-components/candidateCard'

export default function TripDetails() {
  const { goAdminHome } = useGoRoutes()
  const pathParams = useParams()
  const token = window.localStorage.getItem('token')

  const [data, loading, error, request] = useRequestData() //eslint-disable-line

  useEffect(() => {
    request(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trip/${pathParams.id}
    `,
      '',
      { headers: { auth: token } },
      'get'
    )
  }, [data, request, token, pathParams.id]) 
  useProtectedPage()
  if (data) {
    const { trip } = data.data
    const { name, description, planet, durationInDays, date } = trip

    const showCadidates = trip.candidates.map((candidate) => {
      return (
        <CandidateCard
          key={candidate.id}
          name={candidate.name}
          age={candidate.age}
          country={candidate.country}
          profession={candidate.profession}
          applicationText={candidate.applicationText}
          id={candidate.id}
          tripId={pathParams.id}
          token={token}
        />
      )
    })

    return (
      <>
        <div>
          <div>
            <h1>{name}</h1>
            <p>
              <b>Nome: </b>
              {name}
            </p>
            <p>
              <b>Descrição: </b>
              {description}
            </p>
            <p>
              <b>Planeta: </b>
              {planet}
            </p>
            <p>
              <b>Duração: </b>
              {durationInDays} dias
            </p>
            <p>
              <b>Data: </b>
              {date}
            </p>
          </div>
          <button onClick={goAdminHome}>Voltar</button>
          <div>
            <h2>Candidatos Pendentes</h2>
            {trip.candidates.length === 0 ? (
              <p>Não há candidatos pendentes</p>
            ) : (
              showCadidates
            )}
          </div>
          <div>
            <h2>Candidatos Aprovados</h2>
            {trip.approved.length === 0 ? (
              <p>Não há candidatos aprovados</p>
            ) : (
              trip.approved.map((candidato) => {
                return <li key={candidato.id}>{candidato.name}</li>
              })
            )}
          </div>
        </div>
      </>
    )
  }
  return <>Loading...</>
}
