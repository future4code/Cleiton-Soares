import React, { Component } from "react";
import styled from "styled-components";

export const GeneralContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    margin: 10px 0;
  }

  input{
    margin-bottom: 10px;
  }
`;

export default class Etapa2 extends Component {
  render() {
    return (
      <GeneralContainer>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <p>5. Qual curso?</p>
        <input type="text" />
        <p>6. Qual a unidade de ensino?</p>
        <input type="text" />
      </GeneralContainer>
    );
  }
}
