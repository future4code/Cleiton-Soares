import { useState, useCallback } from 'react'
import axios from 'axios'

const useRequestData = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  //

  const request = useCallback(async (url, body, header, method) => {
    let response
    const axiosMethod = method.toLowerCase()

    if (axiosMethod === 'post' || axiosMethod === 'put') {
      try {
        setError(null)
        setLoading(true)
        response = await axios[axiosMethod](url, body, header)
      } catch (err) {
        response = null
        setError(err) //.response.data
      } finally {
        setData(response)
        setLoading(false)
        return { response }
      }
    } else {
      try {
        setError(null)
        setLoading(true)
        response = await axios[axiosMethod](url, header)
      } catch (err) {
        response = null
        setError(err.response.data) 
      } finally {
        setData(response)
        setLoading(false)
        return { response }
      }
    }

  }, [])

  return [data, loading, error, request]
}

export default useRequestData
