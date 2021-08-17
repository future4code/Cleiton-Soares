import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ApplicationForm() {
  const [inputName, setInputName] = React.useState('')
  const [inputIdade, setInputIdade] = React.useState('')
  const [inputText, setInputText] = React.useState('')
  const [inputProfession, setInputProfession] = React.useState('')
  const history = useHistory()

  const onChangeName = (e) => {
    setInputName(e.target.value)
    console.log(inputName);
  }

  const onChangeIdade = (e) => {
    setInputIdade(e.target.value)
  }

  const onChangeText = (e) => {
    setInputText(e.target.value)
  }

  const onChangeProfession = (e) => {
    setInputProfession(e.target.value)
  }

  const goListTrips = () => {
    history.push('/trips/list')
  }
  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <form>
        <select name='' id=''>
          <option value='default'>Escolha uma viagem</option>
        </select>
        <input
          type='text'
          placeholder='Nome'
          onChange={onChangeName}
          value={inputName}
        />
        <input
          type='number'
          placeholder='Idade'
          onChange={onChangeIdade}
          value={inputIdade}
        />
        <input
          type='text'
          placeholder='Texto de Candidatura'
          onChange={onChangeText}
          value={inputText}
        />
        <input
          type='text'
          placeholder='Profissão'
          onChange={onChangeProfession}
          value={inputProfession}
        />
        <select>
          <option value='default'>Escolha um país</option>
          
        </select>
      </form>
      <button onClick={goListTrips}>Voltar</button>
      <button>Enviar</button>
    </div>
  )
}
