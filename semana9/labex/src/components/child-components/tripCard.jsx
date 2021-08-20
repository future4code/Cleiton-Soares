import React from 'react'

export default function TripCard({ name, onClick }) {
  return (
    <div >
      <span onClick={onClick}>{name}</span>
      <button>Apagar</button>
      <hr />
    </div>
  )
}
