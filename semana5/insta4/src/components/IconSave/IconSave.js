import React from 'react'
import styled from 'styled-components'


const IconContainer = styled.div`
  display: flex;
`

const SaveImage = styled.img`
  margin-left: 5px;
`

const IconSave = (props) => {
  return (
    <IconContainer>
      <SaveImage
        alt={'Save'} src=
      />
    </IconContainer>
    )
}

export default IconSave
