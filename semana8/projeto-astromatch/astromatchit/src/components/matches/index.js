import React from 'react'
import axios from 'axios'
import * as S from './styles'
import ReactLoading from 'react-loading'

function Matches() {
  const [matches, setmatches] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const getMatches = async () => {
    try {
      setIsLoading(true)
      const resp = await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/cleiton/matches'
      )
      setIsLoading(false)
      setmatches(resp.data.matches)
    } catch (err) {
      console.error(err)
    }
  }

  React.useEffect(() => {
    getMatches()
  }, [])

  const showMatches = matches.map((match, i) => {
    return (
      <S.PersonCard key={i}>
        <S.PersonPhoto photo={match.photo}></S.PersonPhoto>
        <p>{match.name}</p>
      </S.PersonCard>
    )
  })

  return isLoading ? (
    <S.LoadingContainer>
      <ReactLoading type={'spin'} color={'#753192'} height={50} width={50} />
    </S.LoadingContainer>
  ) : (
    <S.MatchesContainer>{showMatches}</S.MatchesContainer>
  )
}

export default Matches
