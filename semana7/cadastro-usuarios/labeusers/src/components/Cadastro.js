import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios'


const CadastroContainer = styled.div`
  justify-self: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  border: 1px solid black;
`;

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin: 5px 0;
  }
  input {
    margin: 0 0 5px 0;
    height: 20px;
  }
  button {
    margin: 5px auto;
    padding: 8px 15px;
    cursor: pointer;
  }
`;

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers: {
    Authorization: "cleiton-silva-lovelace"
  }
}


export default class Cadastro extends Component {
  state = {
    inputNome: "",
    inputEmail: "",
  }

  criaUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios
    .post(url, body, headers)
    .then((response) => {
      alert('Sucesso')
      this.setState({inputNome: "", inputEmail: ""})
      })
      .catch((error) => {
        alert(error.response.data.message)
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
      <CadastroContainer>
        <Formulario>
          <label>Nome:</label>
          <input
            type="text"
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
          />
          <label>E-mail:</label>
          <input
            type="text"
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
          />
          <button onClick={this.criaUsuario}>Salvar</button>
        </Formulario>
      </CadastroContainer>
    );
  }
}
