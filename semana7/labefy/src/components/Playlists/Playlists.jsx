import React, { Component } from 'react'
import axios from 'axios'
import {
  StyledPlaylistItem,
  StyledMenuCounter,
  StyledDivider,
  StyledForm,
  StyledInput,
  StyledButton,
  PlaylistContainer,
} from '../../styles'

export const url =
  'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

export const headers = {
  headers: {
    Authorization: 'cleiton-silva-lovelace',
  },
}

export default class Playlists extends Component {
  state = {
    playlists: [],
    inputNewPlaylist: '',
  }

  componentDidMount() {
    this.getPlaylists()
  }

  onChangeInputNPL = (e) => {
    this.setState({ inputNewPlaylist: e.target.value })
  }

  getPlaylists = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list })
      })
      .catch((er) => {
        alert(er.response.data.message)
      })
  }


  postPlaylist = (event) => {
    event.preventDefault()
    axios
      .post(url, { name: this.state.inputNewPlaylist }, headers)
      .then(() => {
        this.getPlaylists()
        this.setState({ inputNewPlaylist: '' })
      })
      .catch((er) => {
        alert(er.response.data.message)
      })
  }

  deletePlaylist = (id) => {
    if (window.confirm('Deseja apagar esta playlist?')) {
      axios
        .delete(`${url}/${id}`, headers)
        .then(() => {
          this.getPlaylists()
          this.props.setShowTrackFalse()
        })
        .catch((er) => {
          alert(er.response.data.message)
        })
    }
  }

  render() {
    const playlistsRender = this.state.playlists.map((el) => {
      return (
        <StyledPlaylistItem
          key={el.id}
          onClick={() => {
            this.props.getPlaylistTracks(el.id)
            this.props.getPlaylistName(el.name)
            this.props.getPlaylistId(el.id)
          }}
        >
          <span>{el.name}</span>
          <small onClick={() => this.deletePlaylist(el.id)}>Excluir</small>
        </StyledPlaylistItem>
      )
    })

    return (
      <PlaylistContainer>
        <StyledMenuCounter>
          Minhas Playlists
          <span>[{this.state.playlists.length}]</span>
        </StyledMenuCounter>
        <StyledForm onSubmit={this.postPlaylist}>
          <div>
            {/* <StyledLabel htmlFor='playlist'>Nova Playlist:</StyledLabel> */}
            <StyledInput
            placeholder={'Nova Playlist'}
              value={this.state.inputNewPlaylist}
              onChange={this.onChangeInputNPL}
              type='text'
            />
          </div>
          <StyledButton>+</StyledButton>
        </StyledForm>
        <StyledDivider />
        {playlistsRender}
      </PlaylistContainer>
    )
  }
}
