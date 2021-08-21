import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import CandidateCard from '../child-components/candidateCard'

export default function TripDetails() {
  const { goAdminHome } = useGoRoutes()
  const pathParams = useParams()
  const [tripData, setTripData] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approveds, setApproveds] = useState([])
  const token = window.localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState(true)

  const [data, loading, error, request] = useRequestData()

  useEffect(() => {
    request(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trip/${pathParams.id}
    `,
      '',
      { headers: { auth: token } },
      'get'
    )
  }, [])
  useProtectedPage()

  useEffect(() => {
    if (data) {
      const { trip } = data.data
      setApproveds(trip.approved)
      setCandidates(trip.candidates)

      let tripCopy = trip
      delete tripCopy.candidates
      delete tripCopy.approved
      setTripData(tripCopy)

      setIsLoading(false)
    }
  }, [data])

  const handleApprove = (data) => {
    let approvedsCopy = [...approveds, data]
    setApproveds(approvedsCopy)
    setCandidates(candidates.filter((element) => element.id !== data.id))
  }

  return loading ? (
    <>
      <p>loading</p>
    </>
  ) : (
    <>
      <div>
        <h1>{tripData.name}</h1>
        <p>
          <b>Nome: </b>
          {tripData.name}
        </p>
        <p>
          <b>Descrição: </b>
          {tripData.description}
        </p>
        <p>
          <b>Planeta: </b>
          {tripData.planet}
        </p>
        <p>
          <b>Duração: </b>
          {tripData.durationInDays} dias
        </p>
        <p>
          <b>Data: </b>
          {tripData.date}
        </p>
      </div>

      <button onClick={goAdminHome}>Voltar</button>
      <div>
        <h2>Candidatos Pendentes</h2>
        {candidates && candidates.length === 0 ? (
          <p>Não há candidatos pendentes</p>
        ) : (
          candidates &&
          candidates.map((candidate) => (
            <CandidateCard
              onClick={handleApprove}
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
          ))
        )}
      </div>
      <div>
        <h2>Candidatos Aprovados</h2>
        {approveds && approveds.length === 0 ? (
          <p>Não há candidatos aprovados</p>
        ) : (
          approveds &&
          approveds.map((candidato) => (
            <li key={candidato.id}>{candidato.name}</li>
          ))
        )}
      </div>
    </>
  )
}
