import React, { Component } from "react";
import styled from "styled-components";


export default class PerguntaAberta extends Component {
  render() {
    return (
      <>
        <p>{this.props.pergunta}</p>
        <input type="text" />
      </>
    );
  }
}
