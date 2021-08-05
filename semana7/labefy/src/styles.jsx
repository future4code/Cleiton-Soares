import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open sans', sans-serif;
  }

  #root{
    display: grid;
    grid-template-columns: 250px 1fr;
  }
  
  aside {
    display: grid;
    grid-template-rows: 50px 1fr;
    background-color: #F9F9F9;
    height: 100vh;
    min-height: 100%;
    box-shadow: 0px 0px 4px 3px rgba(0,0,0,0.1);
  }

  main{
    display: grid;
    grid-template-rows: 1fr 80px;
    height: 100vh;
  }
`
export const MusicsContainer = styled.div`
  padding: 2rem;
  max-height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
}
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    border: 3px solid transparent;
}


`  

export const PlaylistContainer = styled.div`
  padding: 1rem;
  height: 100%;
  grid-row: 2/-1;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
}
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    border: 3px solid transparent;
}

`

export const StyledTittle = styled.header`
  background-color: #946fed;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledMenuCounter = styled.h2`
  font-size: 16px;
  margin: 0 0 0.5rem 0;
  color: #7c5aca;
  display: flex;
  justify-content: space-between;
  font-weight: bolder;

  span {
    font-weight: normal;
  }
`
export const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: flex-end;
`

export const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 0;
  font-weight: bold;
  color: #333;
`
export const StyledInput = styled.input`
  margin-top: 5px;
  border: 0;
  border-radius: 5px;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  font-size: 1rem;
  color: #222;
  background-color: #f1f1f1;
  width: 95%;
`

export const StyledButton = styled.button`
  position: absolute;
  border-radius: 50%;
  border: 0;
  color: #fff;
  font-size: 24px;
  line-height: 10px;
  height: 40px;
  width: 40px;
  right: -5px;
  cursor: pointer;
  background-color: #946fed;
  transition: all 0.2s;

  &:hover {
    background-color: #7c5aca;
    transition: all 0.2s;
  }
`

export const StyledDivider = styled.hr`
  margin: 1rem 0;
  border: 0;
  border-top: 2px solid #e5e5e5;
`

export const StyledPlaylistItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: #666;
  padding: 0.5rem;
  margin: 5px 0;
  background-color: #f1f1f1;
  transition: all 0.2s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s;
    background-color: #f9f9f9;
  }

  small {
    font-size: 14px;
    color: #d60000;
  }

  small:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const StyledLi = styled.li`
  list-style: none;
  width: 100%;

`

export const StyledMusicItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: #666;
  padding: 0.5rem;
  margin: 0.7rem 0;
  background-color: #f9f9f9;
  transition: all 0.2s;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    transition: all 0.2s;
    background-color: #fff;
  }

  small {
    font-size: 14px;
    color: #d60000;
  }

  small:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  div {
    display: flex;
    align-items: center;
    word-break: break-word;
  }
`

export const StyledFormAdd = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    button {
      margin: 0.5rem 0 0.5rem 1rem;
      border-radius: 5px;
      border: transparent;
      padding: 0.5rem;
      background-color: #946fed;
      color: white;
      font-weight: bold;
    }
  }

  input {
    width: 100%;
    background-color: #f1f1f1;
    border: transparent;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1rem;
    color: #222;
    margin: 0.5rem 0;
    &:nth-child(2) {
      margin: 0.5rem 1rem;
    }
  }
`

export const StyledPlaylistTittle = styled.h2`
  color: #946fed;
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const StyledPlayIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1ed760;
  height: 35px;
  width: 35px;
  min-height: 35px;
  min-width: 35px;
  margin-right: 0.7rem;
  border-radius: 50%;
  img {
    margin-left: 2px;
  }
`

export const StyledMusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    align-self: flex-start;
  }

  span:nth-child(2) {
    font-weight: lighter;
    font-size: 14px;
  }
`

export const StyledUl = styled.ul`
  margin-top: 1.6rem;
`
