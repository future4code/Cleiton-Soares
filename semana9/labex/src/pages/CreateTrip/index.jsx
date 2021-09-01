import React, { useEffect } from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { usePost } from '../../services/usePost'
import useForm from '../../hooks/useForm'
import { Form, Card } from 'react-bootstrap'
import Buttons from '../../components/Buttons/index'
import { CentralizedDiv, Margin } from '../../styles/styles'

export default function CreateTrip() {
  const { goAdminHome } = useGoRoutes()
  useProtectedPage()

  const initialValues = {
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  }
  const { values, handleChange, setValues } = useForm(initialValues)
  const token = window.localStorage.getItem('token')

  const { data, error, post } = usePost('trips', values, {
    headers: { ContentType: 'application/json', auth: token },
  })

  const submitTrip = (event) => {
    event.preventDefault()
    post()
    setValues(initialValues)
  }

  useEffect(() => {
    data && alert('Viagem criada com sucesso!')
    error && alert(error)
  }, [data, error])

  return (
    <>
      <h2>Criar Viagem</h2>
      <Form onSubmit={submitTrip} style={{ width: '450px' }}>
        <Margin>
          <Form.Control
            type='text'
            placeholder='Nome'
            name='name'
            value={values.name}
            onChange={handleChange}
            required
          />
        </Margin>
        <Margin>
          <Form.Select
            name='planet'
            value={values.planet}
            onChange={handleChange}
            required
          >
            <option value='' selected hidden>
              Escolha um Planeta
            </option>
            <option value='Mercúrio'>Mercúrio</option>
            <option value='Vênus'>Vênus</option>
            <option value='Terra'>Terra</option>
            <option value='Marte'>Marte</option>
            <option value='Jupiter'>Jupiter</option>
            <option value='Saturno'>Saturno</option>
            <option value='Urano'>Urano</option>
            <option value='Netuno'>Netuno</option>
            <option value='Plutão'>Plutão</option>
          </Form.Select>
        </Margin>
        <Margin>
          <Form.Control
            type='date'
            name='date'
            value={values.date}
            onChange={handleChange}
            required
          />
        </Margin>
        <Margin>
          <Form.Control
            type='text'
            placeholder='Descrição'
            name='description'
            value={values.description}
            onChange={handleChange}
            required
          />
        </Margin>
        <Margin>
          <Form.Control
            type='number'
            placeholder='Duração em dias'
            name='durationInDays'
            value={values.durationInDays}
            onChange={handleChange}
            required
          />
        </Margin>
        <CentralizedDiv>
          <Buttons
            variant='outline-primary'
            name='Voltar'
            type='button'
            onClick={goAdminHome}
          />
          <Buttons name='Enviar' type='submit' />
        </CentralizedDiv>
      </Form>
    </>
  )
}
