import React from 'react'
// import axios from 'axios'
import useRequestData from '../../hooks/useRequestData'

export default function CandidateCard(props) {
  const [respDecide, loading, error, requestDecide] = useRequestData()

  const decideCandidate = (choice) => {
    const headers = {
      headers: {
        ContentType: 'application/json',
        auth: props.token,
      },
    }
    requestDecide(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips/${props.tripId}/candidates/${props.id}/decide`,
      { approve: choice },
      headers,
      'put'
    )
    error && console.log(error);
    console.log(respDecide);
  }

  return (
    <div>
      <p>
        <b>Nome: </b>
        {props.name}
      </p>
      <p>
        <b>Profissão: </b>
        {props.profession}
      </p>
      <p>
        <b>Idade: </b>
        {props.age}
      </p>
      <p>
        <b>País: </b>
        {props.country}
      </p>
      <p>
        <b>Texto de Candidatura: </b>
        {props.applicationText}
      </p>
      <button onClick={() => decideCandidate(true)}>Aprovar</button>
      <button onClick={() => decideCandidate(false)}>Reprovar</button>
      <hr />
    </div>
  )
}
