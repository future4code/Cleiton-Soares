import styled from "styled-components";

export const ContainerUsuarios = styled.div`
  background-color: white;
  margin-top: 2rem;
  box-sizing: border-box;
  padding: 45px;
  width: 450px;
  height: auto;
  margin-bottom: auto;
  justify-self: center;
  text-align: center;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  border-radius: 5px;

  h2 {
    margin-top: 0;
  }
  @media(max-width: 600px) {
  width: 100%;
}
`;

export const ItemLista = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #f0f1f5;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  list-style: none;
  li {
    cursor: pointer;
    transition: all 0.1s ease;
    :hover{
      color: #06001b;
      font-weight: bold;
    }
  }
  button {
    background-color: #d43104;
    color: white;
    border: none;
    transition: all 0.2s ease;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;

    :hover {
      background-color: #c72b00;
    }
  }
`;
