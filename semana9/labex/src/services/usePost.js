import { useState } from 'react'
import axios from 'axios'

export const usePost = (finalUrl, body, header) => {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl =
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/'

  const post = () => {
    setIsLoading(true)
    axios
      .post(`${baseUrl}${finalUrl}`, body, header)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }

  return { data, isLoading, error, post }
}
