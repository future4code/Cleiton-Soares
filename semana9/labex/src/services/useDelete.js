import { useState } from 'react'
import axios from 'axios'

export const useDelete = (id, token) => {
  const [error, setError] = useState({})

  const baseUrl =
  `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips/${id}`

  const del = () => {
    try{
      axios
      .delete(baseUrl, { headers: { ContentType: 'application/json', auth: token } })
    } catch (error){
      setError(error.response.data.message)
    }
  }

  return { error, del }
}
