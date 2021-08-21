import React, { useEffect } from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useGoRoutes } from '../../hooks/useGoRoutes'
import { usePost } from '../../hooks/services/usePost'
import useForm from '../../hooks/useForm'

export default function CreateTrip() {
  const {goAdminHome} = useGoRoutes()
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
    data && alert('deu bom')
    error && alert(error)

  }, [data, error])

  return (
    <>
      <h2>Criar Viagem</h2>
      <form onSubmit={submitTrip}>
        <input
          type='text'
          placeholder='Nome'
          name='name'
          value={values.name}
          onChange={handleChange}
          required
        />
        <select
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
        </select>
        <input
          type='date'
          name='date'
          value={values.date}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          placeholder='Descrição'
          name='description'
          value={values.description}
          onChange={handleChange}
          required
        />
        <input
          type='number'
          placeholder='Duração em dias'
          name='durationInDays'
          value={values.durationInDays}
          onChange={handleChange}
          required
        />

        <button type='button' onClick={goAdminHome}>Voltar</button>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
