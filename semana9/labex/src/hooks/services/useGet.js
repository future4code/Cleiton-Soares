import { useState } from 'react'
import axios from 'axios'

export const useGet = (finalUrl, header) => {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl =
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/'
  let response
  const get = async () => {
    try {
      setIsLoading(true)
      if (header) {
        response = await axios.get(`${baseUrl}${finalUrl}`, header)
      } else {
        response = await axios.get(`${baseUrl}${finalUrl}`)
      }
    } catch (err) {
      setError(err)
      setIsLoading(false)
    } finally {
      setData(response.data)
      setIsLoading(false)
    }
  }

  return { data, isLoading, error, get }
}
