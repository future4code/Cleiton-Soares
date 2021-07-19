import React, { Component } from "react";
import styled from "styled-components";

export const GeneralContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  form p{
    margin: 10px 0;
  }
  
  form select{
    margin: 10px 0;
  }

  form button{
    margin-top: 10px;
  }
`

export default class Etapa3 extends Component {
  render() {
    return (
      <GeneralContainer>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <form>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input type="text" />
          <p>6. Você fez algum curso complementar?</p>
          <select name="formacao">
            <option value="Nenhum">Nenhum</option>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Curso de inglês">Curso de inglês</option>
          </select>
        </form>
      </GeneralContainer>
    );
  }
}
