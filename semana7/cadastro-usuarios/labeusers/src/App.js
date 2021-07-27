import React, { Component } from 'react'
import Cadastro from './components/Cadastro'
import styled from 'styled-components'
import axios from 'axios'

const GeneralContainer = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers: {
    Authorization: "cleiton-silva-lovelace"
  }
}

export default class App extends Component {
  state = {
    inputNome: "",
    inputEmail: "",
  }

  criaUsuario = (nome, email) => {
    const body = {
      name: nome,
      email: email
    }
    axios
      .post(url, body, headers)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  render() {
    return (
      <GeneralContainer>
        <Cadastro
          valueInputNome={this.state.inputNome}
          onChangeInputNome={this.onChangeInputNome}
          valueInputEmail={this.state.inputEmail}
          onChangeInputEmail={this.onChangeInputEmail}
          criaUsuario={this.criaUsuario}
        />
      </GeneralContainer>
    )
  }
}
