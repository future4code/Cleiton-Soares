import { Button, TextField } from '@material-ui/core'
import React from 'react'
import * as S from './styles'
import useForm from '../../hooks/useForm'
import {login} from '../../services/login'

export const LoginForm = () => {
  const [form, handleChange, clear] = useForm({ email: '', password: '' })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear)
  }
 
  return (
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
          Fazer Login
        </Button>
      </form>
    </S.InputsContainer>
  )
}
