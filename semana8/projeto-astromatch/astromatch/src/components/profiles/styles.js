import styled from 'styled-components'

export const ImageContainer = styled.div`
  border-radius: 10px 10px 0 0;
  width: 100%;
  overflow: hidden;
  height: 320px;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  object-position: center;
  z-index: 1;
  height: 100%;
  object-fit: contain;
  position: absolute;
`

export const ImageBlur = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  object-fit: cover;
  left: 0;
  filter: blur(20px);
`
export const PersonContainer = styled.div`
  box-shadow: 1px 1px 10px rgb(0 0 0 / 20%);
  border-radius: 10px;
  height: 415px;
  position: relative;
`

export const PersonInfos = styled.div`
  padding: 1rem;
  width: 100%;
  position: absolute;
  top: 315px;
`

export const ButtonsContainer = styled.div`
  padding-top: 1rem;
  width: auto;
  height: 5.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 150px;
  margin: 0 auto;
`

export const ChooseButtons = styled.button`
  border-radius: 50px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 6px solid #f5f4f5;
  cursor: pointer;
  :hover {
    img {
      transform: scale(1.1);
    }
  }
  img {
    width: 1.8rem;
  }
  `

export const RestartButton = styled(ChooseButtons)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: -28%;
  top: 16%;

  img {
    width: 1.2rem;
  }
`
