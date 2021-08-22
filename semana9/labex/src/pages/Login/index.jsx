import React, { useEffect } from 'react'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { usePost } from '../../services/usePost'

export default function Login() {
  const { goHome, goAdminHome } = useGoRoutes()

  const initialValues = {
    inputEmail: '',
    inputPass: '',
  }
  const [values, setValues] = React.useState(initialValues)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const { data, error, post } = usePost(
    'login',
    {
      email: values.inputEmail,
      password: values.inputPass,
    },
    { header: { ContentType: 'application/json' } }
  )

  const submitLogin = (event) => {
    event.preventDefault()
    post()
    setValues(initialValues)
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.token)
      goAdminHome()
    }
    error && alert(error.response.data.message)
  }, [data, error])

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
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
