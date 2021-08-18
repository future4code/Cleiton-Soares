import React from 'react'

export default function InfoTrip({nome, descricao, planeta, duracao, data}) {
  return (
    <div>
      <p>
        <b>Nome da viagem: </b> {nome}
      </p>
      <p>
        <b>Descrição: </b> {descricao}
      </p>
      <p>
        <b>Planeta: </b> {planeta}
      </p>
      <p>
        <b>Duração: </b> {duracao} dias
      </p>
      <p>
        <b>Data: </b> {data}
      </p>
      <hr/>
    </div>
  )
}
