import React from 'react'

const useForm = (initialValues) => {
  const [values, setValues] = React.useState(initialValues)
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }
  return { values, handleChange, setValues }
}

export default useForm
