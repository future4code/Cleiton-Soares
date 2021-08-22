import React, { useEffect } from 'react'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { usePost } from '../../services/usePost'
import { Form, Card } from 'react-bootstrap'
import Buttons from '../../components/Buttons/index'
import { CentralizedDiv } from '../../styles/styles'
import styled from 'styled-components'

const GeneralContainer = styled.div`
  margin: auto;
`

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
    <GeneralContainer>
      <CentralizedDiv>
        <h1>Login</h1>
      </CentralizedDiv>
      <Card body>
        <Form style={{ width: '300px' }} onSubmit={submitLogin}>
          <Form.Group>
            <Form.Label>Endereço de E-mail</Form.Label>
            <Form.Control
              placeholder='Digite seu E-mail'
              name='inputEmail'
              type='email'
              onChange={handleInputChange}
              value={values.inputEmail}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Senha</Form.Label>

            <Form.Control
              type='password'
              placeholder='Digite sua Senha'
              name='inputPass'
              onChange={handleInputChange}
              value={values.inputPass}
              required
            />
          </Form.Group>
          <CentralizedDiv>
            <Buttons
              variant='outline-primary'
              name='Voltar'
              type='button'
              onClick={goHome}
            />
            <Buttons name='Entrar' type='submit' />
          </CentralizedDiv>
        </Form>
      </Card>
    </GeneralContainer>
  )
}
