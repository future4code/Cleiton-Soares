import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const login = (body, clear) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
    })
    .catch((err) => {
      alert(err.response.data.message)
      clear()
    })
}