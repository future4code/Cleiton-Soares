import React from 'react'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import CandidateCard from '../child-components/candidateCard'

export default function TripDetails() {
  const { goAdminHome } = useGoRoutes()
  const pathParams = useParams()
  const token = window.localStorage.getItem('token')
  const [tripDetail] = useRequestData(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trip/${pathParams.id}
  `,
    { headers: { auth: token } }
  )

  // tripDetail && console.log(tripDetail.trip)

  const showCadidates =
    tripDetail &&
    tripDetail.trip.candidates.map((candidate) => {
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

  useProtectedPage()

  return (
    <>
      {tripDetail && (
        <div>
          <div>
            <h1>{tripDetail.trip.name}</h1>
            <p>
              <b>Nome: </b>
              {tripDetail.trip.name}
            </p>
            <p>
              <b>Descrição: </b>
              {tripDetail.trip.description}
            </p>
            <p>
              <b>Planeta: </b>
              {tripDetail.trip.planet}
            </p>
            <p>
              <b>Duração: </b>
              {tripDetail.trip.durationInDays} dias
            </p>
            <p>
              <b>Data: </b>
              {tripDetail.trip.date}
            </p>
          </div>
          <button onClick={goAdminHome}>Voltar</button>
          <div>
            <h2>Candidatos Pendentes</h2>
            {tripDetail.trip.candidates.length === 0 ? (
              <p>Não há candidatos pendentes</p>
            ) : (
              showCadidates
            )}
          </div>
          <div>
            <h2>Candidatos Aprovados</h2>
            {tripDetail.trip.approved.length === 0 ? (
              <p>Não há candidatos aprovados</p>
            ) : (
              tripDetail.trip.approved.map((candidato) => {
                return <li key={candidato.id}>{candidato.name}</li>
              })
            )}
          </div>
        </div>
      )}
    </>
  )
}
