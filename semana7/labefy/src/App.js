import React, { Component } from 'react';
import Playlists from './components/Playlists/Playlists';
import { GlobalStyle } from './styles';


export default class App extends Component {
  criaPlaylist = () => {};

  render() {
    return (
      <>
        <Playlists/>
        <GlobalStyle />
      </>
    );
  }
}
