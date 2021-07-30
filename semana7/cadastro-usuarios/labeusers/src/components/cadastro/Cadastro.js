import React, { Component } from "react";
import axios from "axios";
import {CadastroContainer} from './stl.Cadastro'
import {Formulario} from './stl.Cadastro'

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "cleiton-silva-lovelace",
  },
};

export default class Cadastro extends Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };

  criaUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(url, body, headers)
      .then((response) => {
        alert("Sucesso");
        this.setState({ inputNome: "", inputEmail: "" });
      })
      .catch((error) => {
        console.log(error.response.data.message)
        alert(error.response.data.message);
      });
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
    return (
      <CadastroContainer>
        <Formulario>
          <h2>Cadastro de usuário</h2>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
          />
          <label>E-mail:</label>
          <input
            type="text"
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
          />
          <button onClick={this.criaUsuario}>Salvar</button>
        </Formulario>
      </CadastroContainer>
    );
  }
}
