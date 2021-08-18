import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { countries } from './countries'
import axios from 'axios'

export default function ApplicationForm() {
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
  }
  
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
    
    axios
    .post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips/${values.selectTrip}/apply`,
      body,
      header
      )
      .then(() => {
        alert('Cadastro feito com sucesso')
        setValues(initialValues)
      })
      .catch((err) => {
        alert(err)
      })
    }
    
    const [trips] = useRequestData(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips'
      )
      
      const showTrips =
      trips &&
      trips.trips.map((trip) => {
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
  
  const history = useHistory()
  const goListTrips = () => {
    history.push('/trips/list')
  }
  
  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={applyToTrip}>
        <select
          name='selectTrip'
          value={values.selectTrip}
          onChange={handleInputChange}
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
        />
        <input
          name='inputAge'
          type='number'
          placeholder='Idade'
          onChange={handleInputChange}
          value={values.inputAge}
        />
        <input
          name='inputText'
          type='text'
          placeholder='Texto de Candidatura'
          onChange={handleInputChange}
          value={values.inputText}
        />
        <input
          name='inputProfession'
          type='text'
          placeholder='Profissão'
          onChange={handleInputChange}
          value={values.inputProfession}
        />
        <select
          name='selectCountry'
          value={values.selectCountry}
          onChange={handleInputChange}
        >
          <option>Escolha um país</option>
          {showContries}
        </select>
        <button onClick={goListTrips}>Voltar</button>
        <button type={'submit'}>Enviar</button>
      </form>
    </div>
  )
}
