import { Button, TextField } from '@material-ui/core'
import React from 'react'
import logo from '../../assets/logo.png'
import * as S from './styles'
import useForm from '../../hooks/useForm'

export const Login = () => {
  const [form, handleChange, clear] = useForm({ email: '', password: '' })

  const onSubmitForm = (event) => {
    event.preventDefault()
  }
  return (
    <S.ScreenContainer>
      <S.LogoImage src={logo} />
      <S.InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            label='E-mail'
            variant={'outlined'}
            fullWidth
            required
          />
          <TextField
            type='password'
            name='password'
            value={form.password}
            onChange={handleChange}
            label='Senha'
            variant={'outlined'}
            margin={'normal'}
            fullWidth
            required
          />

          <Button type='submit' variant='contained' color='primary' fullWidth>
            Aperte
          </Button>
        </form>
      </S.InputsContainer>
    </S.ScreenContainer>
  )
}
