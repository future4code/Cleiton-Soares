import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

export const GeneralContainer = styled.div`
  margin-top: 82px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  justify-self: center;
  /* margin-top: 2rem; */
  width: 350px;
  height: 260px;
  padding: 45px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  border-radius: 5px;

  h2 {
    margin-top: 0;
  }
`;

export const Info = styled.div`
  border-bottom: 1px solid #f0f1f5;
  padding-bottom: 0.6rem;
  margin-bottom: 0.6rem;
  p{
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BotaoBlue = styled.div`
  background-color: #0067b8;
  color: white;
  border: none;
  margin: 0;
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s ease;
  :hover {
    background-color: #005da6;
  }
`;
export const BotaoRed = styled.div`
  background-color: #d43104;
  color: white;
  border: none;
  margin: 0;
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s ease;
  :hover {
    background-color: #c72b00;
  }
`;

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "cleiton-silva-lovelace",
  },
};



export default class UserInfo extends Component {

  deletaUsuario = (id) => {
    if (window.confirm("Tem certeza que deseja apagar?") === true) {
      axios
        .delete(`${url}/${id}`, headers)
        .then(() => {
          alert("Usuário apagado com sucesso.");
        })
        .catch((error) => {
          console.log(error);
        });
        this.props.backToUsers()
    }
  };


  render() {
    return (
      <GeneralContainer>
        <div>
          <h2>Informações do usuario</h2>
          <Info>
            <strong><p>Nome: </p></strong>
            <span>{this.props.userNome}</span>
          </Info>
          <Info>
            <strong><p>E-mail: </p></strong>
            <span>{this.props.userEmail}</span>
          </Info>
        </div>
        <Botoes>
          <BotaoRed onClick={() => this.deletaUsuario(this.props.userId)}>Apagar</BotaoRed>
          <BotaoBlue onClick={this.props.backToUsers}>Voltar</BotaoBlue>
        </Botoes>
      </GeneralContainer>
    );
  }
}
