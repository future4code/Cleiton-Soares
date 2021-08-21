import React from 'react'
import useRequestData from '../../hooks/useRequestData'

export default function TripCard({ name, onClick, id, onDelete }) {
  const [data, isloading, error, request] = useRequestData()

  const deleteTrip = () => {
    const token = window.localStorage.getItem('token')
    request(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips/${id}`,
      '',
      { headers: { ContentType: 'application/json', auth: token } },
      'delete'
    )
    onDelete({name, id})
  }

  return (
    <div>
      <span onClick={onClick}>{name}</span>
      <button onClick={deleteTrip}>Apagar</button>
      <hr />
    </div>
  )
}
