import { useState, useEffect } from 'react'
import Header from './components/header'
import Matches from './components/matches'
import Profiles from './components/profiles'
import { GeneralContainer } from './styles'
import axios from 'axios'

function App() {
  const [currentPage, setcurrentPage] = useState('Profiles')
  const [profile, setprofile] = useState({})

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

  const showRightPage = () => {
    switch (currentPage) {
      case 'Profiles':
        return (
          <Profiles
            getProfileToChoose={getProfileToChoose}
            profile={profile}
          />
        )
      case 'Matches':
        return <Matches />
      default:
        break
    }
  }

  return (
    <GeneralContainer>
      <Header
        currentPage={currentPage}
        setRightPage={(page) => {
          setcurrentPage(page)
        }}
      />
      <main>{showRightPage()}</main>
    </GeneralContainer>
  )
}

export default App
