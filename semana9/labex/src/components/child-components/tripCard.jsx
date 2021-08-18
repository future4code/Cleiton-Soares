import React from 'react'

export default function TripCard({name, description, planet, durationInDays, date}) {

  return (
    <div>
      <span>{name}</span>
      <button>Apagar</button>
      <hr/>
    </div>
  )
}
