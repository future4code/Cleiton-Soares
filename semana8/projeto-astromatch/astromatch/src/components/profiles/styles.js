import styled from 'styled-components'

export const PersonContainer = styled.div`
  box-shadow: 1px 1px 10px rgb(0 0 0 / 20%);
  border-radius: 10px;
  position: relative;
  height: auto;
  margin-bottom: auto;
`

export const ImageContainer = styled.div`
  border-radius: 10px 10px 0 0;
  background: url(${props => props.photo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  height: 310px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  backdrop-filter: blur(5px);
`

export const ProfileName = styled.p`
  margin-bottom: 10px;
`;

export const PersonInfos = styled.div`
  padding: 1rem;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  width: auto;
  display: flex;
  position: relative;
  margin: 1rem auto 0 auto;
  grid-row: 2/3;
`

export const Empty = styled.div`
  height: 100%;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: #ff6a6a;
  }
`;

export const ChooseButtons = styled.button`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 6px solid #f5f4f5;
  cursor: pointer;
  margin: 0 3px;

  img {
    width: 1.8rem;
  }

  :hover {
    img {
      transform: scale(1.1);
    }
  }

`

export const NormalRestartButton = styled(ChooseButtons)`
  width: auto;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: bold;
  color: #ffc66e;
  img {
    width: 1.2rem;
    margin-right: 10px
  }
`;

export const RestartButton = styled(ChooseButtons)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: -40px;
  top: -5px;
  img {
    width: 1.2rem;
  }
`

export const ProfilesContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 80px;
  height: 100%;
`
