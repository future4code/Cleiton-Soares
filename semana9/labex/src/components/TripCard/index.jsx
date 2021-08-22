import React from 'react'
import { useDelete } from '../../services/useDelete'

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
    <div>
      <span onClick={onClick}>{name}</span>
      <button onClick={deleteTrip}>Apagar</button>
      <hr />
    </div>
  )
}
