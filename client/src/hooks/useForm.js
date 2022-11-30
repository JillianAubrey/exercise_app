import { useState } from 'react'

export default function useForm(initialValues) {
  const [data, setData] = useState(initialValues);

  const handleFormSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log(data)
  }

  const handleInputChange = (event) => {
    setData(prev => ({
      ...prev, [event.target.name]: event.target.value
    }))
    console.log(data)
  }
 
  return {
    handleFormSubmit,
    handleInputChange,
    data,
  }
};