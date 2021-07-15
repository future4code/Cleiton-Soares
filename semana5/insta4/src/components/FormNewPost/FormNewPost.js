import React, { Component } from 'react'
import styled from 'styled-components'

const InputNewPost = styled.div`
margin: 10px;
display: flex;
flex-direction: column;
input{
  margin: 5px;
}
`

export default class FormNewPost extends Component {
  render() {
    return (
      <InputNewPost>
        <input
          placeholder="Nome do usuário"
          value={this.props.inputnome}
          onChange={this.props.onChangeNome}
        />
        <input
          placeholder="Foto do usuário"
          value={this.props.inputfoto}
          onChange={this.props.onChangeFoto}
        />
        <input
          placeholder="Foto do post"
          value={this.props.inputpost}
          onChange={this.props.onChangePost}
        />

        <button onClick={this.props.adicionaPost}>Postar</button>
      </InputNewPost>
    )
  }
}
