import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { countries } from './countries'
import useForm from '../../hooks/useForm'
import { usePost } from '../../services/usePost'
import { useGet } from '../../services/useGet'
import { Container, Row, Col, FormControl, Form, } from 'react-bootstrap' //prettier-ignore

export default function ApplicationForm() {
  const initialValues = {
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
    selectTrip: ''
  }
  const { values, handleChange, setValues } = useForm(initialValues)

  const { data, error, post } = usePost(
    `trips/${values.selectTrip}/apply`,
    {
      name: values.name,
      age: values.age,
      applicationText: values.applicationText,
      profession: values.profession,
      country: values.country,
    },
    { headers: { ContentType: 'application/json' } }
  )

  const applyToTrip = (event) => {
    event.preventDefault()
    post()
    setValues(initialValues)
  }

  useEffect(() => {
    data && alert('Cadastro feito com sucesso')
    error && alert('Algo deu errado')
  }, [data])

  const get = useGet('trips')

  const [trips, setTrips] = useState([])
  useEffect(() => {
    get.get()
  }, [])

  useEffect(() => {
    get.data && setTrips(get.data.trips)
  }, [get.data])

  //xs sm md lg xl
  return (
    <Container>
      <h1>Inscreva-se para uma viagem</h1>
      <Row>
        <Col xs={12} md={6}>
          <form onSubmit={applyToTrip}>
            <Form.Select
              name='selectTrip'
              value={values.selectTrip}
              onChange={handleChange}
              required
            >
              <option value='' selected hidden>Escolha uma viagem</option>
              {trips.map((trip) => (
                <option value={trip.id} key={trip.id}>
                  {trip.name}
                </option>
              ))}
            </Form.Select>
            <FormControl
              name='name'
              type='text'
              placeholder='Nome'
              onChange={handleChange}
              value={values.name}
              required
            />
            <FormControl
              name='age'
              type='number'
              placeholder='Idade'
              onChange={handleChange}
              value={values.age}
              required
            />
            <FormControl
              title='O texto deve ter no mínimo 30 caracteres.'
              name='applicationText'
              type='text'
              placeholder='Texto de Candidatura'
              onChange={handleChange}
              value={values.applicationText}
              minLength='30'
              required
            />
            <FormControl
              name='profession'
              type='text'
              placeholder='Profissão'
              onChange={handleChange}
              value={values.profession}
              required
            />
            <Form.Select
              name='country'
              value={values.country}
              onChange={handleChange}
              required
            >
              <option value='' selected hidden>Escolha um país</option>
              {countries.map((country, i) => (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Form.Select>
            <div>
              <Link to='/trips/list'>
                <button>Voltar</button>
              </Link>
              <button type={'submit'}>Enviar</button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
