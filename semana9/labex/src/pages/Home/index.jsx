import React from 'react'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import * as S from './styles'
import Buttons from '../../components/Buttons'

export default function Home() {
  const { goLogin, goListTrips, goAdminHome } = useGoRoutes()

  const goPage = () => {
    const token = window.localStorage.getItem('token')
    token === null ? goLogin() : goAdminHome()
  }

  return (
    <S.GeneralContainer>
      <h1>LabeX</h1>
      <div>
        <Buttons name='Ver viagens' onClick={goListTrips} />
        <Buttons variant='outline-primary' name='Área de admin' onClick={goPage}/>
      </div>
    </S.GeneralContainer>
  )
}
