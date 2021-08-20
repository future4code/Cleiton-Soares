import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useGoRoutes } from '../../hooks/useGoRoutes'

export default function Login() {
  const {goHome} = useGoRoutes()
  const history = useHistory()

  const initialValues = {
    inputEmail: '',
    inputPass: '',
  }
  const [values, setValues] = React.useState(initialValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const SubmitLogin = (e) => {
    e.preventDefault()
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/login',
        {
          email: values.inputEmail,
          password: values.inputPass,
        },
        { header: 'Content-Type: application/json' }
      )
      .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        history.push('/admin/trips/list')

      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    setValues(initialValues)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={SubmitLogin}>
        <input
          placeholder='E-mail'
          name='inputEmail'
          type='email'
          onChange={handleInputChange}
          value={values.inputEmail}
          required
        />
        <input
          type='password'
          placeholder='Senha'
          name='inputPass'
          onChange={handleInputChange}
          value={values.inputPass}
          required
        />
        <button type='button' onClick={goHome}>Voltar</button>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}
