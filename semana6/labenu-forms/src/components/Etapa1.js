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

export default class Etapa1 extends Component {
  render() {
    return (
      <GeneralContainer>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <form>
          <p>1. Qual o seu nome?</p>
          <input type="text" />
          <p>2. Qual sua idade?</p>
          <input type="text" />
          <p>3. Qual seu email?</p>
          <input type="text" />
          <p>4. Qual a sua escolaridade?</p>
          <select name="formacao">
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
          </select>
        </form>
      </GeneralContainer>
    );
  }
}
