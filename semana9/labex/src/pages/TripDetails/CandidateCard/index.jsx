import React, { useEffect, useState } from 'react'
import { usePut } from '../../../services/usePut'
import Buttons from '../../../components/Buttons/index'
import { Card } from 'react-bootstrap'
import * as S from '../../../styles/styles'

export default function CandidateCard(props) {

  const { data, put } = usePut(
    `${props.tripId}/candidates/${props.id}/decide`,
    {
      headers: {
        ContentType: 'application/json',
        auth: props.token,
      },
    }
  )

  const decideCandidate = (choice) => {
    if (
      window.confirm(
        `Deseja ${choice === true ? 'aprovar' : 'reprovar'} este candidato?`
      )
    ) {
      put({ approve: choice })
    }
  }

  useEffect(() => {
    data && props.onClick(props)
  }, [data])

  const info = [
    { title: 'Nome: ', prop: props.name },
    { title: 'Profissão: ', prop: props.profession },
    { title: 'Idade: ', prop: props.age },
    { title: 'País: ', prop: props.country },
    { title: 'Texto de Candidatura: ', prop: props.applicationText },
  ]

  return (
    <S.Margin>


      <Card body>
        {info.map((item) => (
          <p>
            <b>{item.title}</b>
            {item.prop}
          </p>
        ))}

        <Buttons
          onClick={() => decideCandidate(true)}
          name='Aprovar'
          size='sm'
          variant='success'
        ></Buttons>
        <Buttons
          onClick={() => decideCandidate(false)}
          name='Reprovar'
          size='sm'
          variant='danger'
        ></Buttons>
      </Card>
    </S.Margin>
  )
}
