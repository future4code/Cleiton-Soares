import styled from 'styled-components'

export const ImageCard = styled.div`
  border-radius: 10px 10px 0 0 ;
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  z-index: 1;
  position: absolute;
`

export const ImageBlur = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
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
