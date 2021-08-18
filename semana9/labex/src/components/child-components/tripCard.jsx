import React from 'react'

export default function TripCard({ name, onClick }) {
  return (
    <div onClick={onClick}>
      <span>{name}</span>
      <button>Apagar</button>
      <hr />
    </div>
  )
}
