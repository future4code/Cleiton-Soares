import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import CandidateCard from '../../components/CandidateCard'
import { useGet } from '../../services/useGet'

export default function TripDetails() {
  const pathParams = useParams()
  const { goAdminHome } = useGoRoutes()
  const token = window.localStorage.getItem('token')

  const [tripData, setTripData] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approveds, setApproveds] = useState([])

  const {get, data, isLoading} = useGet(`trip/${pathParams.id}`, { headers: { auth: token } })
  useEffect(() => {get()},[])

  useProtectedPage()

  useEffect(() => {
    if (data) {
      setApproveds(data.trip.approved)
      setCandidates(data.trip.candidates)

      let tripCopy = data.trip
      delete tripCopy.candidates
      delete tripCopy.approved
      setTripData(tripCopy)
    }
  }, [data])

  const handleApprove = (data) => {
    let approvedsCopy = [...approveds, data]
    setApproveds(approvedsCopy)
    setCandidates(candidates.filter((element) => element.id !== data.id))
  }

  return isLoading ? (
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
