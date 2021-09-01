import React from 'react'
import { Card } from 'react-bootstrap'


export default function InfoTrip({
  name,
  description,
  planet,
  durationInDays,
  date,
}) {
  return (
    <Card   style={{width: '25rem', marginTop: '1.5rem'}}>
      <Card.Header style={{textAlign: 'center'}}>
        <Card.Title>{name}</Card.Title> 
      </Card.Header>
      <Card.Body>
      <Card.Text>
        <b>Descrição: </b> {description}
      </Card.Text>
      <Card.Text>
        <b>Planeta: </b> {planet}
      </Card.Text>
      <Card.Text>
        <b>Duração: </b> {durationInDays} dias
      </Card.Text>
      <Card.Text>
        <b>Data: </b> {date}
      </Card.Text>
      </Card.Body>
    </Card>
  )
}
