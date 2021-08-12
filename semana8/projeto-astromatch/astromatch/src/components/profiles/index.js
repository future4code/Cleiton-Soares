import { useState, useEffect } from 'react'
import { ImageCard, ImageBlur, Image, PersonContainer, PersonInfos } from './styles'
import axios from 'axios'

function Profiles() {
  const [profile, setprofile] = useState({})
  let { age, bio, id, name, photo } = profile

  const getProfileToChoose = async () => {
    try {
      const resp = await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cleiton/person'
      )
      setprofile(resp.data.profile)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  return (
    <>
      <PersonContainer>
        <ImageCard>
          <Image src={photo} alt={name} />
          <ImageBlur src={photo}></ImageBlur>
        </ImageCard>
        {id && (
          <PersonInfos>
            <p>
              <strong>{name},</strong> {age}
            </p>
            <p>{bio}</p>
          </PersonInfos>
        )}
      </PersonContainer>
      <div>
        <button>Cancel Match</button>
        <button onClick={getProfileToChoose}>Accept Match</button>
      </div>
    </>
  )
}

export default Profiles
