import { useState, useEffect } from 'react'
import axios from 'axios'
import { PersonCard, PersonPhoto, MatchesContainer } from './styles'

function Matches() {
  const [matches, setmatches] = useState([])

  const getMatches = async () => {
    try {
      const resp = await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cleiton/matches'
      )
      setmatches(resp.data.matches)
      console.log(resp.data.matches)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMatches()
  }, [])

  const showMatches = matches.map((match) => {
    return (
      <PersonCard>
        <PersonPhoto photo={match.photo}></PersonPhoto>
        <p>{match.name}</p>
      </PersonCard>
    )
  })

  return <MatchesContainer>{showMatches}</MatchesContainer>
}

export default Matches
