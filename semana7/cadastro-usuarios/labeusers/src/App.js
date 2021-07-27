import React, { Component } from "react";
import Cadastro from "./components/Cadastro";
import styled from "styled-components";
import Usuarios from "./components/ListaUsuarios";

const GeneralContainer = styled.div`
  padding: 2rem;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
`;
const ButtonSwitch = styled.button`
  justify-self: flex-start;
  padding: 0.5rem;
  width: auto;
  height: auto;
`;

export default class App extends Component {
  state = {
    switchButton: "usuarios",
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
        break;
    }
  };

  componentRender = () => {
    switch (this.state.switchButton) {
      case "usuarios":
        return <Usuarios />;
      case "cadastro":
        return <Cadastro />;
      default:
        break;
    }
  };

  render() {
    return (
      <GeneralContainer>
        <ButtonSwitch onClick={this.switchComponent}>
          {this.state.switchButton === "usuarios"
            ? "Trocar para pagina de cadastro"
            : "Trocar para pagina de usuarios"}
        </ButtonSwitch>
        {this.componentRender()}
      </GeneralContainer>
    );
  }
}
