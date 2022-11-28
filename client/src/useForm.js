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
   //#idea 
  // const resetForm = (keys) => {
  //   keys.forEach((key) => {
  //     setData(prev => ({
  //       ...prev, key: initialValues.key || null
  //     }))
  //   })
  // }

  return {
    handleFormSubmit,
    handleInputChange,
    data,
  }
};