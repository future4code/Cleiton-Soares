import { useState, useCallback } from 'react'
import axios from 'axios'

const useRequestData = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const request = useCallback(async (url, body, header, method) => {
    let response
    const axiosMethod = method.toLowerCase()

    try {
      setError(null)
      setLoading(true)
      if (axiosMethod === 'post' || axiosMethod === 'put') {
        response = await axios[axiosMethod](url, body, header)
      } else {
        response = await axios[axiosMethod](url, header)
      }
    } catch (err) {
      response = null
      setError(err)
    } finally {
      setData(response)
      setLoading(false)
      return { response }
    }
  }, [])

  return [data, loading, error, request]
}

export default useRequestData
