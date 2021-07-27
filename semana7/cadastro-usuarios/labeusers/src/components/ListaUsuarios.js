import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerUsuarios = styled.div`
  justify-self: center;
  width: 450px;
  text-align: center;
`;

const ItemLista = styled.div`
  border-bottom: 1px solid #F0F1F5;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  list-style: none;
`;

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "cleiton-silva-lovelace",
  },
};

export default class Usuarios extends Component {
  state = {
    arrayUsuarios: [],
  };

  componentDidMount() {
    this.mostraUsuario();
  }

  mostraUsuario = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ arrayUsuarios: res.data });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  
  deletaUsuario = (id) => {
    
    if (window.confirm('Tem certeza que deseja apagar?') === true) {
      axios
      .delete(`${url}/${id}`, headers)
      .then(() => {
        this.mostraUsuario()
        alert('Usuário apagado com sucesso.');
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    }
    }

  render() {
    const renderizaListaUsuarios = this.state.arrayUsuarios.map((usuario) => {
      return (
        <ItemLista key={usuario.id}>
          <li>{usuario.name}</li>
          <button onClick={() => this.deletaUsuario(usuario.id)}>X</button>
        </ItemLista>
      );
    });
    
    return (
      <ContainerUsuarios>
        <h1>Usuários Cadastrados:</h1>
        {renderizaListaUsuarios}
      </ContainerUsuarios>
    );
  }
}
