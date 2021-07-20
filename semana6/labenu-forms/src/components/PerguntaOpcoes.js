import React, { Component } from "react";

export default class PerguntaOpcoes extends Component {
  render() {
    return (
      <>
        <p>{this.props.pergunta}</p>
        <select name="formacao">
          <option value={this.props.opcoes[0]}>{this.props.opcoes[0]}</option>
          <option value={this.props.opcoes[1]}>{this.props.opcoes[1]}</option>
          <option value={this.props.opcoes[2]}>{this.props.opcoes[2]}</option>
          <option value={this.props.opcoes[3]}>{this.props.opcoes[3]}</option>
        </select>
      </>
    );
  }
}
