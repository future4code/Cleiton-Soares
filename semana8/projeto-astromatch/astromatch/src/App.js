import { useState } from 'react'
import Header from './components/header'
import Matches from './components/matches'
import Profiles from './components/profiles'
import { GlobalStyle, GeneralContainer } from './styles'

function App() {
  const [currentPage, setcurrentPage] = useState('Profiles')

  const setRightPage = () => {
    currentPage === 'Profiles'
      ? setcurrentPage('Matches')
      : setcurrentPage('Profiles')
  }

  const showRightPage = () => {
    switch (currentPage) {
      case 'Profiles':
        return <Profiles />
      case 'Matches':
        return <Matches />
      default:
        break
    }
  }

  return (
    <>
      <GeneralContainer>
        <Header currentPage={currentPage} setRightPage={setRightPage} />
        <main>{showRightPage()}</main>
      </GeneralContainer>

      <GlobalStyle />
    </>
  )
}

export default App

// header
//   tittle
//   matchesButton || backToProfiles

// Profiles
//   cardprofile
//     description
//       name, age
//       description
//   footer
//     button cancelMatch
//     button acceptMatch

// matches
//   li cardPerson
//     image
//     name

// button clear swipes and matches
