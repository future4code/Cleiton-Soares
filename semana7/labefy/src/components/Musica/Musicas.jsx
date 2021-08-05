import React, { Component } from 'react'
import axios from 'axios'
import { url, headers } from '../Playlists/Playlists'
import {
  StyledPlaylistTittle,
  StyledMusicItem,
  StyledLi,
  StyledMusicInfo,
  StyledPlayIcon,
  StyledDivider,
  StyledFormAdd,
  StyledUl,
  MusicsContainer
} from '../../styles'
import PlayIcon from '../../assets/icons/play.png'

export default class Musicas extends Component {
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

  removeTrackFromPlaylist = (id, trackId) => {
    if (window.confirm('Deseja apagar esta música?')) {
      axios
        .delete(`${url}/${id}/tracks/${trackId}`, headers)
        .then((res) => {
          this.props.getPlaylistTracks(this.props.playlistId)
        })
        .catch((er) => {
          console.log(er)
        })
    }
  }

  render() {
    const playlistTracks = this.props.musics.map((music) => {
      return (
        <StyledLi key={music.id} onClick={()=> this.props.getMusicUrl(music.url)}>
          <StyledMusicItem>
            <div >
              <StyledPlayIcon>
                <img src={PlayIcon} alt='' />
              </StyledPlayIcon>
              <StyledMusicInfo>
                <span>{music.name}</span>
                <span>{music.artist}</span>
              </StyledMusicInfo>
            </div>
            <small
              onClick={() =>
                this.removeTrackFromPlaylist(this.props.playlistId, music.id)
              }
            >
              Excluir
            </small>
          </StyledMusicItem>
        </StyledLi>
      )
    })

    return (
      <MusicsContainer>
        {this.props.showTracks && (
          <StyledPlaylistTittle>{this.props.playlistName}</StyledPlaylistTittle>
        )}
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
                placeholder={'Spotify Url'}
              />
              <button
                onClick={() => this.addTrackToPlaylist(this.props.playlistId)}
              >
                Adicionar
              </button>
            </div>
            <StyledDivider />
          </StyledFormAdd>
        )}
        <StyledUl>{this.props.showTracks && playlistTracks}</StyledUl>
      </MusicsContainer>
    )
  }
}
