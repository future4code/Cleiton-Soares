import React from 'react'
import { useGoRoutes } from '../../hooks/useGoRoutes'

export default function Home() {
  const {goLogin, goListTrips, goAdminHome} = useGoRoutes()

  const goPage = () => {
    const token = window.localStorage.getItem('token')
    token === null ? goLogin() : goAdminHome()
  }

  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={goListTrips}>Ver viagens</button>
      <button onClick={goPage}>Área de admin</button>
    </div>
  )
}
