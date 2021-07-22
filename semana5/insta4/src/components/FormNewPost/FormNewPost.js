import React, { Component } from 'react'
import styled from 'styled-components'

const InputNewPost = styled.div`
align-items: center;
width: 400px;
margin: 10px;
display: flex;
flex-direction: column;
input{
  box-sizing: border-box;
  margin: 5px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 8px;
  width: 100%;
  box-shadow: 2px 3px 6px rgba(0,0,0,0.20);
  transition: all 0.2s ;
  &:hover{
    border: 1px solid black

  }
  &:focus{
    outline: 0;
  }
}
button{
  padding: 5px;
  width: 100px;
  border-radius: 20px;
  background-color: black;
  border: none;
  color: white;
  margin: 10px;
  box-shadow: 2px 3px 6px rgba(0,0,0,0.20);
  cursor: pointer;
  transition: all 0.2s ;
  :hover{
    background-color: #303030;
  }
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
