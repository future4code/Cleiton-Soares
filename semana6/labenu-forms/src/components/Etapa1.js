import React, { Component } from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

export const GeneralContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  div p {
    margin: 10px 0;
  }

  div select {
    margin: 10px 0;
  }

  div button {
    margin-top: 10px;
  }
`;

export default class Etapa1 extends Component {

  state = {
    
  }

  render() {
    return (
      <GeneralContainer>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <div>
          <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
          <PerguntaAberta pergunta={"2. Qual sua idade?"} />
          <PerguntaAberta pergunta={"3. Qual seu email?"} />
          <PerguntaOpcoes
            pergunta={"4. Qual sua escolaridade?"}
            opcoes={[
              "Ensino médio incompleto",
              "Ensino médio completo",
              "Ensino superior incompleto",
              "Ensino superior completo",
            ]}
          />
        </div>
      </GeneralContainer>
    );
  }
}
