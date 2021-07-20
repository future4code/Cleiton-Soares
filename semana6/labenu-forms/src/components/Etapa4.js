import React, { Component } from "react";
import styled from "styled-components";

export const GeneralContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p{
    margin: 10px 0;
  }

`

export default class Etapa4 extends Component {

  render() {
    return (
      <GeneralContainer>
        <h3>O FORMULÁRIO ACABOU</h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </GeneralContainer>
    );
  }
}
