import styled from 'styled-components'

export const HeaderS = styled.header`
  background-color: lavender;
  display: grid;
  grid-template-columns: 5rem 1fr 5rem;
  width: 100%;
  text-align: center;
  justify-items: center;
  align-items: center;

  h2 {
    grid-column: 2/3;
  }

`
