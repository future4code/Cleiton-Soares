import styled from 'styled-components'

export const Header = styled.header`
  border-bottom: 1px solid #ffecec;
  display: grid;
  grid-template-columns: 5rem 1fr 5rem;
  justify-items: center;
  align-items: center;

  img {
    height: 25px;
    width: auto;
    grid-column: 2/3;
  }

  button{
    cursor: pointer;
    padding: 8px 5px 0;
    background-color: transparent;
    border: none;
    :hover{
      img{
        transform: scale(0.9);
        transition: all 0.2s ease 0s;
      }
    }

    img{
      width: 2rem;
    }
  }

`