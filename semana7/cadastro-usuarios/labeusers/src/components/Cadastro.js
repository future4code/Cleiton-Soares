import React, { Component } from "react";
import styled from "styled-components";

const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  border: 1px solid black;
`;

const Formulario = styled.form`
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

export default class Cadastro extends Component {
  render() {
    return (
      <CadastroContainer>
        <Formulario>
          <label>Nome:</label>
          <input
            type="text"
            value={this.props.valueInputNome}
            onChange={this.props.onChangeInputNome}
          />
          <label>E-mail:</label>
          <input
            type="text"
            value={this.props.valueInputEmail}
            onChange={this.props.onChangeInputEmail}
          />
          <button
            onClick={() =>
              this.props.criaUsuario(
                this.props.valueInputNome,
                this.props.valueInputEmail
              )
            }
          >
            Salvar
          </button>
        </Formulario>
      </CadastroContainer>
    );
  }
}
