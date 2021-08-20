import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import useRequestData from '../../hooks/useRequestData'
import { countries } from './countries'

export default function ApplicationForm() {
  //Forms
  const initialValues = {
    inputName: '',
    inputAge: '',
    inputText: '',
    inputProfession: '',
    selectCountry: '',
    selectTrip: '',
  }
  const [values, setValues] = React.useState(initialValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  } // finish forms

  
  // apply request
  const [applyData, applyLoading, applyError, applyRequest] = useRequestData() // eslint-disable-line

  const applyToTrip = (event) => {
    event.preventDefault()
    const body = {
      name: values.inputName,
      age: values.inputAge,
      applicationText: values.inputText,
      profession: values.inputProfession,
      country: values.selectCountry,
    }
    const header = { header: 'Content-Type: application/json' }

    applyRequest(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips/${values.selectTrip}/apply`,
      body,
      header,
      'post'
    )

    applyData && alert('Cadastro feito com sucesso')
    setValues(initialValues)

    applyError && console.log(applyError)
  } // finish apply request 


  const [tripsData, tripsLoading, tripsError, tripsRequest] = useRequestData() // eslint-disable-line

  useEffect(() => {
    tripsRequest(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips',
      undefined,
      undefined,
      'get'
    )
  }, [tripsRequest, tripsData])

  const showTrips =
    tripsData &&
    tripsData.data.trips.map((trip) => {
      return (
        <option value={trip.id} key={trip.id}>
          {trip.name}
        </option>
      )
    })

  const showContries = countries.map((country, i) => {
    return (
      <option key={i} value={country.name}>
        {country.name}
      </option>
    )
  })

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <S.ApplyForm onSubmit={applyToTrip}>
        <select
          name='selectTrip'
          value={values.selectTrip}
          onChange={handleInputChange}
          required
        >
          <option value='default'>Escolha uma viagem</option>
          {showTrips}
        </select>
        <input
          name='inputName'
          type='text'
          placeholder='Nome'
          onChange={handleInputChange}
          value={values.inputName}
          required
        />
        <input
          name='inputAge'
          type='number'
          placeholder='Idade'
          onChange={handleInputChange}
          value={values.inputAge}
          required
        />
        <input
          title='O texto deve ter no mínimo 30 caracteres.'
          name='inputText'
          type='text'
          placeholder='Texto de Candidatura'
          onChange={handleInputChange}
          value={values.inputText}
          minLength='30'
          required
        />
        <input
          name='inputProfession'
          type='text'
          placeholder='Profissão'
          onChange={handleInputChange}
          value={values.inputProfession}
          required
        />
        <select
          name='selectCountry'
          value={values.selectCountry}
          onChange={handleInputChange}
          required
        >
          <option>Escolha um país</option>
          {showContries}
        </select>
        <div>
          <Link to='/trips/list'>
            <button>Voltar</button>
          </Link>
          <button type={'submit'}>Enviar</button>
        </div>
      </S.ApplyForm>
    </div>
  )
}
