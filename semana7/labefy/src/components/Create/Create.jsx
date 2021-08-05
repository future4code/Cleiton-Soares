import React, { Component } from 'react'
import axios from 'axios'
import { url, headers } from '../Playlists/Playlists'
import { StyledPlaylistTittle, StyledFormAdd } from '../../styles'

export default class Create extends Component {
  state = {
    inputName: '',
    inputArtist: '',
    inputLink: '',
  }

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value })
  }
  onChangeArtist = (e) => {
    this.setState({ inputArtist: e.target.value })
  }
  onChangeLink = (e) => {
    this.setState({ inputLink: e.target.value })
  }

  addTrackToPlaylist = (id) => {
    axios
      .post(
        `${url}/${id}/tracks`,
        {
          name: this.state.inputName,
          artist: this.state.inputArtist,
          url: this.state.inputLink,
        },
        headers
      )
      .then((res) => {
        this.props.getPlaylistTracks(this.props.playlistId)
        this.setState({ inputArtist: '', inputLink: '', inputName: '' })
      })
      .catch((er) => {
        console.log(er)
      })
  }

  render() {


    return (
      <div>
        <StyledPlaylistTittle>{this.props.playlistName}</StyledPlaylistTittle>
        {this.props.showTracks && (
          <StyledFormAdd>
            <h3>Adicionar Música</h3>
            <div>
              <input
                type='text'
                onChange={this.onChangeName}
                value={this.state.inputName}
                placeholder={'Nome da música'}
              />
              <input
                type='text'
                onChange={this.onChangeArtist}
                value={this.state.inputArtist}
                placeholder={'Artista'}
              />
              <input
                type='text'
                onChange={this.onChangeLink}
                value={this.state.inputLink}
                placeholder={'Url'}
              />
              <button
                onClick={() => this.props.addTrackToPlaylist(this.props.playlistId)}
              >
                Adicionar
              </button>
            </div>
          </StyledFormAdd>
        )}
      </div>
    )
  }
}
