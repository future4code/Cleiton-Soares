import React, { Component } from 'react'
import Playlists from './components/Playlists/Playlists'
import Musicas from './components/Musica/Musicas'
import axios from 'axios'
import { GlobalStyle, StyledTittle } from './styles'
import { url, headers } from './components/Playlists/Playlists'



export default class App extends Component {
  state = {
    musics: [],
    showTracks: false,
    playlistName: '',
    playlistId: '',
    musicUrl: '',
    showPlayer: false,
  }

  getMusicUrl = async (url) => {
    const musicId = url.slice(31)
    await this.setState({ musicUrl: musicId })
    await this.setState({ showPlayer: true })
    console.log(this.state.musicUrl)
  }

  setShowTrackFalse = () => {
    this.setState({ showTracks: false })
  }

  getPlaylistTracks = (id) => {
    axios
      .get(`${url}/${id}/tracks`, headers)
      .then((res) => {
        this.setState({ musics: res.data.result.tracks })
        this.setState({ showTracks: true })
      })
      .catch((er) => {
        alert(er.response.data.message)
      })
  }

  getPlaylistName = (name) => {
    this.setState({ playlistName: name })
  }

  getPlaylistId = (id) => {
    this.setState({ playlistId: id })
  }

  render() {
    return (
      <>
        <aside>
          <StyledTittle>
            <h1>Labefy</h1>
          </StyledTittle>
          <Playlists
            playlists={this.state.playlists}
            getPlaylistTracks={this.getPlaylistTracks}
            getPlaylistId={this.getPlaylistId}
            getPlaylistName={this.getPlaylistName}
            setShowTrackFalse={this.setShowTrackFalse}
          />
        </aside>
        <main>
          <Musicas
            getPlaylistTracks={this.getPlaylistTracks}
            musics={this.state.musics}
            showTracks={this.state.showTracks}
            playlistName={this.state.playlistName}
            playlistId={this.state.playlistId}
            getMusicUrl={this.getMusicUrl}
          />

          {this.state.showPlayer && (
            <iframe
              src={`https://open.spotify.com/embed/track/${this.state.musicUrl}?theme=0`}
              title='YouTube video player'
              width='100%'
              height='80'
              frameBorder='0'
              allowtransparency='true'
              allow='encrypted-media'
            ></iframe>
          )}
        </main>
        <GlobalStyle />
      </>
    )
  }
}
