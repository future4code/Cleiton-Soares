import styled from "styled-components";

export const GeneralContainer = styled.div`
  box-sizing: border-box;
  background-color: #e2dfdc;
  padding: 2rem;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 50px 1fr
`;

export const ButtonSwitch = styled.button`
  justify-self: flex-start;
  padding: 0.5rem;
  width: auto;
  height: auto;
  background-color: #0067b8;
  color: white;
  border: none;
  margin: 0 auto 0 0;
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s ease;

  :hover {
    background-color: #005da6;
  }

  @media(max-width: 600px) {
  width: 100%;
}
`;
