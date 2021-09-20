import React from 'react'
import { Button } from '@material-ui/core'
import { LoginForm } from './LoginForm'
import logo from '../../assets/logo.png'
import * as S from './styles'
import {useCoordinator} from '../../hooks/useCoordinator'

export const Login = () => {
  const { goTo } = useCoordinator()
  return (
    <S.ScreenContainer>
      <S.LogoImage src={logo} />
      <LoginForm />
      <S.SignUpButtonContainer>
        <Button onClick={goTo.SignUp} type='button' variant='text' color='primary' fullWidth>
          Cadastre-se
        </Button>
      </S.SignUpButtonContainer>
    </S.ScreenContainer>
  )
}
