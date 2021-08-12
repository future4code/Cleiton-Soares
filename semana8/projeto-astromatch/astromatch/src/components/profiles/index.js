import { useState, useEffect } from 'react'
import { ImageContainer, ImageBlur, Image, PersonContainer, PersonInfos, ChooseButtons, ButtonsContainer, RestartButton } from './styles' // prettier-ignore
import cancel from '../../img/cancel.svg'
import heart from '../../img/heart.svg'
import restart from '../../img/restart.svg'
import axios from 'axios'

function Profiles(props) {
  let { age, bio, id, name, photo } = props.profile

  const choosePerson = async (choice) => {
    const body = {
      id: id,
      choice: choice,
    }
    try {
      // eslint-disable-next-line
      const resp = await axios.post(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cleiton/choose-person',
        body
        )
        props.getProfileToChoose()
      } catch (err) {
        console.error(err)
      }
    }
    
    const clear = async () => {
      try {
      // eslint-disable-next-line
      const resp = await axios.put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cleiton/clear'
      )
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <PersonContainer>
        <ImageContainer>
          <Image src={photo} alt={name} />
          <ImageBlur src={photo}></ImageBlur>
        </ImageContainer>

        {id && (
          <PersonInfos>
            <p>
              <strong>{name},</strong> {age}
            </p>
            <p>{bio}</p>
          </PersonInfos>
        )}
      </PersonContainer>
      <ButtonsContainer>
        <RestartButton onClick={clear}>
          <img src={restart} alt='restart' />
        </RestartButton>
        <ChooseButtons onClick={() => choosePerson(false)}>
          <img src={cancel} alt='cancel' />
        </ChooseButtons>
        <ChooseButtons onClick={() => choosePerson(true)}>
          <img src={heart} alt='heart' />
        </ChooseButtons>
      </ButtonsContainer>
    </>
  )
}

export default Profiles
