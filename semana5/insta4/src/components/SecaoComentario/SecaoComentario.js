import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 0 5px 5px 5px;

    button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 80px;
    height: 30px;
    border-radius: 30px;
    background-color: black;
    border: none;
    color: white;
    box-shadow: 2px 3px 6px rgba(0,0,0,0.20);
    cursor: pointer;
    transition: all 0.2s ;
    :hover{
    background-color: #303030;
    }
    }

`

const InputComentario = styled.input`
    width: 100%;
    height: 30px;
    margin-right: 5px;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: all 0.2s ;
    padding: 5px;

    &:hover{
    box-shadow: 2px 3px 6px rgba(0,0,0,0.20);
    }
    &:focus{
    outline: 0;
    box-shadow: 2px 3px 6px rgba(0,0,0,0.20);

  }
`

export class SecaoComentario extends Component {
  state = {
    valorInputComentario: ""
  }

  onChangeComentario = (event) => {
    this.setState({
      valorInputComentario: event.target.value
    })
    console.log(event.target.value);

  }

  render() {
    return <CommentContainer>
      <InputComentario
        placeholder={'Comentário'}
        value={this.state.valorInputComentario}
        onChange={this.onChangeComentario}
      />
      <button onClick={this.props.aoEnviar}>Enviar</button>
    </CommentContainer>
  }
}
