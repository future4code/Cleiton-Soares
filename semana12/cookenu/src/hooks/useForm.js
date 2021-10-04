import { useState } from 'react'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const handleChange = (event) => {
    const { value, name } = event.target
    setForm({...form, [name]: value})
  }

  const clearForm = () => setForm(initialState)

  return [form, handleChange, clearForm]
}

export default useForm