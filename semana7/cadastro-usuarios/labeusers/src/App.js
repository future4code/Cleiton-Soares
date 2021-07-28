import React, { Component } from "react";
import axios from "axios";
import Cadastro from "./components/cadastro/Cadastro";
import Usuarios from "./components/listaUsuarios/ListaUsuarios";
import { GeneralContainer } from "./App.stl";
import { ButtonSwitch } from "./App.stl";
import UserInfo from "./components/userInfo/UserInfo";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "cleiton-silva-lovelace",
  },
};

export default class App extends Component {
  state = {
    switchButton: "cadastro",
    infoUser: {
      name: "",
      email: "",
      id: "",
    },
  };

  switchComponent = () => {
    switch (this.state.switchButton) {
      case "usuarios":
        this.setState({ switchButton: "cadastro" });
        break;
      case "cadastro":
        this.setState({ switchButton: "usuarios" });
        break;
      default:
        this.setState({ switchButton: this.state.switchButton });
        break;
    }
  };

  nome;
  email;
  id;

  abreInfoUsuario = (id) => {
    axios
    .get(`${url}/${id}`, headers)
    .then((res) => {
      this.nome = res.data.name;
      this.email = res.data.email;
      this.id = res.data.id;
      this.setState({ switchButton: "info" });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  backToUsers = () => {
    this.setState({ switchButton: "usuarios" });
  };

  componentRender = () => {
    switch (this.state.switchButton) {
      case "usuarios":
        return <Usuarios abreInfoUsuario={this.abreInfoUsuario} />;
      case "cadastro":
        return <Cadastro />;
      case "info":
        return (
          <UserInfo
            backToUsers={this.backToUsers}
            userNome={this.nome}
            userEmail={this.email}
            userId={this.id}
          />
        );
      default:
        break;
    }
  };

  render() {
    return (
      <GeneralContainer>
   
        {this.state.switchButton !== "info" && (
          <ButtonSwitch onClick={this.switchComponent}>
            {this.state.switchButton === "usuarios"
              ? "Trocar para pagina de cadastro"
              : "Trocar para pagina de usuarios"}
          </ButtonSwitch>
        )}

        {this.componentRender()}
      </GeneralContainer>
    );
  }
}
