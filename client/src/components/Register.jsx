import React, { Fragment, useState } from "react";
import useForm from "../hooks/useForm";
import TextInput from "./form_elements/TextInput";
import EmailInput from "./form_elements/EmailInput";
import PasswordInput from "./form_elements/PasswordInput";
import Error from "./Error";
import postUser from "../helpers/api_requests/postUser";
import './Register.scss';

export default function Register(props) {
  const { setUser } = props
  const { handleInputChange, data} = useForm({name: '', email: '', password: '', password_confirmation: ''})
  const [ error, setError ] = useState('')

  const onRegister = (params) => {
    console.log('onLogin called')
    postUser(
      params,
      (res) => {
        setUser({...res.data});
        setError('');
      },
      (err) => setError(err)
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onRegister(data, setError)
  }
  let errors = ''
  if (error) {
    errors = Object.entries(error.response.data).map((error) => {
      const errorMessage = `${error[0]} ${error[1][0]}`
      return (
        <Error>{errorMessage}</Error>
      )
    })
  }
  return  (
    <form onSubmit={handleSubmit}>
      {error && <Fragment>{errors}</Fragment>}
      <TextInput
        name="name"
        label="Username"
        value={data.name}
        onChange={handleInputChange}
      />
      <EmailInput
        name="email"
        label="Email"
        value={data.email}
        onChange={handleInputChange}
      />
      <PasswordInput
        name="password"
        label="Password"
        value={data.password}
        onChange={handleInputChange}
      />
      <PasswordInput
        name="password_confirmation"
        label="Password Confirmation"
        value={data.password_confirmation}
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  )
}