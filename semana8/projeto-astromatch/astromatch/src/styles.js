import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #root{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    width: auto;
    min-height: 100vh;
    height: auto;

    main{
      padding: 1.2rem;
    }
  }
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
    outline: 0px;
    font-family: 'Ubuntu', sans-serif;
    color: #626262;
  }
    
`
export const GeneralContainer = styled.div`
  width: 380px;
  height: 600px;
  border: 1px solid #ffecec;
  display: grid;
  grid-template-rows: 4rem 1fr;
  border-radius: 15px;
  box-shadow: 2px 2px 10px #cacaca;
`