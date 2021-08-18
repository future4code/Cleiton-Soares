import React from 'react'
import axios from 'axios'


export default function CandidateCard(props) {
  const decideCandidate = (choice) => {
    const headers = {
      headers: {
        ContentType: 'application/json',
        auth: props.token
      }
    }
      axios.put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips/${props.tripId}/candidates/${props.id}/decide`,
        { approve: choice },
        headers
      ).then((resp)=> {
        console.log(resp.data);
      })
      .catch ((err)=>{console.log(err.response)})
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
      <button 
      onClick={() => decideCandidate(true)}
      >Aprovar</button>
      <button 
      onClick={() => decideCandidate(false)}
      >Reprovar</button>
      <hr />
    </div>
  )
}
