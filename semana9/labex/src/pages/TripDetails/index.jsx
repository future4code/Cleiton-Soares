import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import CandidateCard from './CandidateCard'
import { useGet } from '../../services/useGet'
import Buttons from '../../components/Buttons/index'
import { ListGroup } from 'react-bootstrap'
import * as S from '../../styles/styles'
import { AprovedsList } from './styles'
import ReactLoading from 'react-loading'

export default function TripDetails() {
  const pathParams = useParams()
  const { goAdminHome } = useGoRoutes()
  const token = window.localStorage.getItem('token')

  const [tripData, setTripData] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approveds, setApproveds] = useState([])

  const { get, data, isLoading } = useGet(`trip/${pathParams.id}`, {
    headers: { auth: token },
  })
  useEffect(() => {
    get()
  }, [])

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

  return (
    <>
      <Buttons onClick={goAdminHome} name='Voltar'></Buttons>
      {isLoading ? (
        <ReactLoading type={'spin'} color={'#0d6efd'} height={50} width={50} />
      ) : (
        <>
          <h1>{tripData.name}</h1>
          <div>
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
          <br />
          <h2>Candidatos Pendentes</h2>
          <div>
            {candidates && candidates.length === 0 ? (
              <ListGroup>
                <ListGroup.Item>Não há candidatos pendentes</ListGroup.Item>
              </ListGroup>
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

          <br />
          <h2>Candidatos Aprovados</h2>
          {approveds && approveds.length === 0 ? (
            <ListGroup>
              <ListGroup.Item variant='light'>
                Não há candidatos aprovados
              </ListGroup.Item>
            </ListGroup>
          ) : (
            <S.Margin>
              <AprovedsList>
                {approveds &&
                  approveds.map((candidato) => (
                    <ListGroup.Item action key={candidato.id}>
                      {candidato.name}
                    </ListGroup.Item>
                  ))}
              </AprovedsList>
            </S.Margin>
          )}
        </>
      )}
    </>
  )
}
