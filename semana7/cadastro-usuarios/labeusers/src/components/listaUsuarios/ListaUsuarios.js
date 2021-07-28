import React, { Component } from "react";
import axios from "axios";
import {ContainerUsuarios} from './stl.ListaUsuarios'
import {ItemLista} from './stl.ListaUsuarios'


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
    if (window.confirm("Tem certeza que deseja apagar?") === true) {
      axios
        .delete(`${url}/${id}`, headers)
        .then(() => {
          this.mostraUsuario();
          alert("Usuário apagado com sucesso.");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const renderizaListaUsuarios = this.state.arrayUsuarios.map((usuario) => {
      return (
        <ItemLista key={usuario.id}>
          <li onClick={() => this.props.abreInfoUsuario(usuario.id)}>{usuario.name}</li>
          <button onClick={() => this.deletaUsuario(usuario.id)}>X</button>
        </ItemLista>
      );
    });

    return (
      <ContainerUsuarios>
        <h2>Usuários Cadastrados:</h2>
        {this.state.arrayUsuarios.length === 0 && <p>Nenhum usuário cadastrado</p>}
        {renderizaListaUsuarios}
      </ContainerUsuarios>
    );
  }
}
