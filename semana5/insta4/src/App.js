import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import FormNewPost from './components/FormNewPost/FormNewPost';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    arrayPosts: [{
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50?a=1',
      fotoPost: 'https://picsum.photos/200/150?a=1'
    },
    {
      nomeUsuario: 'Julia',
      fotoUsuario: 'https://picsum.photos/50/50?a=2',
      fotoPost: 'https://picsum.photos/200/150?a=2'
    },
    {
      nomeUsuario: 'João',
      fotoUsuario: 'https://picsum.photos/50/50?a=3',
      fotoPost: 'https://picsum.photos/200/150?a=3'
    }],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: "",

  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost,
    }

    const novoArrayPosts = [
      novoPost, ...this.state.arrayPosts
    ]

    this.setState({arrayPosts: novoArrayPosts})

    this.setState({ valorInputNome: "" });
    this.setState({ valorInputFoto: "" });
    this.setState({ valorInputPost: "" });

  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }
  
  onChangeInputFoto = (event) => {
    this.setState({valorInputFoto: event.target.value})
  }
  
  onChangeInputPost = (event) => {
    this.setState({valorInputPost: event.target.value})
  }

  render() {

    const listaDePosts = this.state.arrayPosts.map((post, index) =>{
      return(
        <Post
          key={index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        <FormNewPost
          onChangeNome={this.onChangeInputNome}
          onChangeFoto={this.onChangeInputFoto}
          onChangePost={this.onChangeInputPost}

          inputnome={this.state.valorInputNome}
          inputfoto={this.state.valorInputFoto}
          inputpost={this.state.valorInputPost}
          adicionaPost={this.adicionaPost}
        />
        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
