import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import useRequestData from '../../hooks/useRequestData'

export default function Login() {
  const { goHome } = useGoRoutes()
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

  const [data, loading, error, request] = useRequestData()

  const SubmitLogin = (event) => {
    event.preventDefault()
    request(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/login',
      { email: values.inputEmail, password: values.inputPass },
      { header: { ContentType: 'application/json' } },
      'post'
    )
    setValues(initialValues)
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.data.token)
      history.push('/admin/trips/list')
    }
    error && alert(error.response.data.message)
  }, [data, error])

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
        <button type='button' onClick={goHome}>
          Voltar
        </button>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}
