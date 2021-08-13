import React from 'react';
import * as S from './styles' // prettier-ignore
import cancel from '../../img/cancel.svg'
import heart from '../../img/heart.svg'
import restart from '../../img/restart.svg'
import axios from 'axios'
import { Toast } from '../toast'
import ReactLoading from 'react-loading';

function Profiles(props) {
  const [ isLoading, setIsLoading ] = React.useState(false);
  let profile = props.profile

  const BottomButtons = () => (
    <>
      {props.profile !== null &&
        <S.RestartButton onClick={clear}>
          <img src={restart} alt='restart' />
        </S.RestartButton>
      }
      <S.ChooseButtons
        onClick={() => choosePerson(false)}
        disabled={props.profile === null}
      >
        <img src={cancel} alt='cancel' />
      </S.ChooseButtons>
      <S.ChooseButtons
        onClick={() => choosePerson(true)}
        disabled={props.profile === null}
      >
        <img src={heart} alt='heart' />
      </S.ChooseButtons>
    </>
  );

  const choosePerson = async (choice) => {
    const body = {
      id: profile.id,
      choice: choice,
    }
    try {
      setIsLoading(true);
      const resp = await axios.post(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cleiton/choose-person',
        body
      )
      setIsLoading(false)
      if (resp.data.isMatch) {
        Toast.fire({
          icon: 'success',
          title: 'Match!'
        })
      } else {
        Toast.fire({
          icon: 'error',
          title: 'No Match!'
        })
      }
      props.getProfileToChoose()
    } catch (err) {
      console.error(err)
    }
  }

  const clear = async () => {
    try {
      setIsLoading(true);
      await axios.put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cleiton/clear'
      )
      setIsLoading(false)
      props.getProfileToChoose()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <S.ProfilesContainer>
      {props.profile !== null ? (
        <S.PersonContainer>
          <S.ImageContainer photo={profile.photo}>
            <S.Image src={profile.photo} alt={profile.name} />
          </S.ImageContainer>

          {profile.id && (
            <S.PersonInfos>
              <S.ProfileName>
                <strong>{profile.name}</strong>, {profile.age}
              </S.ProfileName>
              <p>{profile.bio}</p>
            </S.PersonInfos>
          )}
        </S.PersonContainer>
      ) : (
          <S.Empty>
            <span>No match options</span>
            <S.NormalRestartButton onClick={clear}>
              <img src={restart} alt='restart' />
              Restart
            </S.NormalRestartButton>
          </S.Empty>
      )}
      <S.ButtonsContainer>
        {
          isLoading ? (
            <ReactLoading type={'spin'} color={'#753192'} height={50} width={50} />
          ) : (
            <BottomButtons />
          )
        }
      </S.ButtonsContainer>
    </S.ProfilesContainer>
  )
}

export default Profiles
