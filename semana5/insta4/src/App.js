import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import { arrayPosts } from './components/ArrayPosts/ArrayPosts'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state ={
    arrayPosts: [{
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50?a=1',
        fotoPost:'https://picsum.photos/200/150?a=1'
        },
        {
        nomeUsuario:'Julia',
        fotoUsuario:'https://picsum.photos/50/50?a=2',
        fotoPost:'https://picsum.photos/200/150?a=2'
        },
        {
        nomeUsuario:'João',
        fotoUsuario:'https://picsum.photos/50/50?a=3',
        fotoPost:'https://picsum.photos/200/150?a=3'
        }]
  }



  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?a=1'}
        />
        <Post
          nomeUsuario={'Julia'}
          fotoUsuario={'https://picsum.photos/50/50?a=2'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />
        <Post
          nomeUsuario={'João'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=3'}
        />
      </MainContainer>
    );
  }
}

export default App;
