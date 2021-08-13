import styled from 'styled-components'

export const PersonCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #fcfcfc;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #cacaca67;
`

export const PersonPhoto = styled.div`
  box-shadow: 2px 2px 10px #bbbbbb;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`

export const MatchesContainer = styled.div`
  height: 500px;
  overflow: auto;
  padding: 1rem;

  &::-webkit-scrollbar-track
  {
    border-radius: 2px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
    background-color: #e2e2e2;

    &:hover {
      background-color: #c9c9c9;
    }
  }
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`