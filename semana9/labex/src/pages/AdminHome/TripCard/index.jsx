import React from 'react'
import { useDelete } from '../../../services/useDelete'
import Buttons from '../../../components/Buttons'
import { Card } from 'react-bootstrap'
import * as S from '../../../styles/styles'
import { Pointer } from './styles'

export default function TripCard({ name, onClick, id, onDelete }) {
  const token = window.localStorage.getItem('token')

  const { del } = useDelete(id, token)
  const deleteTrip = () => {
    if (window.confirm('Tem certeza que deseja apagar esta viagem?')) {
      del()
      onDelete({ name, id })
    }
  }

  return (
    <S.Margin>
      <Card body>
        <S.SpaceBetwen>
          <Pointer onClick={onClick}>{name}</Pointer>
          <Buttons
            onClick={deleteTrip}
            name='Apagar'
            size='sm'
            variant='danger'
          />
        </S.SpaceBetwen>
      </Card>
    </S.Margin>
  )
}
