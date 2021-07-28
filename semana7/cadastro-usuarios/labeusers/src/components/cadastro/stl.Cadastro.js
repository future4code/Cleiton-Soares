import styled from "styled-components";



export const CadastroContainer = styled.div`
background-color: white;
box-sizing: border-box;
margin: 2rem auto auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 450px;

padding: 45px;
box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
border-radius: 5px;
@media(max-width: 600px) {
  width: 100%;
}
`;

export const Formulario = styled.div`
width: 100%;
display: flex;
flex-direction: column;
label {
  margin: 10px 0;
}
input {
  margin: 0 0 5px 0;
  height: 20px;
  border: none;
  border-bottom: 1px solid black;
  padding: 5px 5px 2px 5px;
  :focus {
    outline: none;
  }
  :hover{
    border-bottom: 1px solid #005da6;

  }
}
button {
  background-color: #0067b8;
  color: white;
  border: none;
  margin: 30px auto 5px;
  padding: 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s ease;
  :hover {
    background-color: #005da6;
  }
}


`;