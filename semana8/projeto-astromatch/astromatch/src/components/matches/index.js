import React from 'react'
import axios from 'axios'
import * as S from './styles'
import { Empty } from '../profiles/styles'
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
      if (resp.status === 200) {
        setIsLoading(false)
        setmatches(resp.data.matches)
      }
    } catch (err) {
      console.error(err)
    }
  }

  React.useEffect(() => {
    getMatches()
    console.log(matches.length)
  }, [])

  const showMatches = matches.map((match) => {
    return (
      <S.PersonCard key={match.id}>
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
    <S.MatchesContainer>
      {matches.length === 0 ? <Empty><span>No match options</span></Empty> : showMatches}
    </S.MatchesContainer>
  )
}

export default Matches
