import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url, header) => {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url, header)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [url]) // eslint-disable-line

  return [data, isLoading, error]
}
