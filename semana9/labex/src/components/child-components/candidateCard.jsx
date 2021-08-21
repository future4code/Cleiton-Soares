import React, { useEffect } from 'react'
import { usePut } from '../../hooks/services/usePut'

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
    <div>
      {info.map((item) => (
        <p>
          <b>{item.title}</b>
          {item.prop}
        </p>
      ))}

      <button onClick={() => decideCandidate(true)}>Aprovar</button>
      <button onClick={() => decideCandidate(false)}>Reprovar</button>
      <hr />
    </div>
  )
}
