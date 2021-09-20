import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as S from './styles'
import useForm from '../../hooks/useForm'

export const SignUpForm = () => {
  const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })

  return (
    <form>
      <S.SignUpFormContainer>
        <S.InputsContainer>
          <TextField
            value={form.name}
            name={'name'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
        </S.InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          Fazer Cadastro
        </Button>
      </S.SignUpFormContainer>
    </form>
  )
}
