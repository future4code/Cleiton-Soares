import React from 'react'
import logo from '../../assets/logo.png'
import * as S from './styles'
import {useCoordinator} from '../../hooks/useCoordinator'
import {SignUpForm} from './SignUpForm'

export const SignUp = () => {
  const { goTo } = useCoordinator()
  return (
    <S.ScreenContainer>
      <S.LogoImage src={logo} />
      <SignUpForm/>

    </S.ScreenContainer>
  )
}
