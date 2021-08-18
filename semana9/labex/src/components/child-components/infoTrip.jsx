import React from 'react'

export default function InfoTrip({name, description, planet, durationInDays, date}) {
  return (
    <div>
      <p>
        <b>Nome da viagem: </b> {name}
      </p>
      <p>
        <b>Descrição: </b> {description}
      </p>
      <p>
        <b>Planeta: </b> {planet}
      </p>
      <p>
        <b>Duração: </b> {durationInDays} dias
      </p>
      <p>
        <b>Data: </b> {date}
      </p>
      <hr/>
    </div>
  )
}
