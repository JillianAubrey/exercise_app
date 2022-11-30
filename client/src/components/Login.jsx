import React, { Fragment, useState } from "react";
import useForm from "../hooks/useForm";
import EmailInput from "./form_elements/EmailInput";
import PasswordInput from "./form_elements/PasswordInput";
import Error from "./Error";
import classnames from "classnames";
import './Login.scss';
import { useEffect } from "react";

export default function Login(props) {
  const { onLogin } = props
  const { handleInputChange, data} = useForm({email: '', password: ''})
  const [ error, setError ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(data, setError)
  }
  let errors = ''
  if (error) {
    errors = Object.entries(error.response.data).map((error) => {
      const errorMessage = `${error[1][0]}`
      return (
        <Error>{errorMessage}</Error>
      )
    })
  }
  return  (
    <form onSubmit={handleSubmit}>
      {error && <Fragment>{errors}</Fragment>}
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
      <button>Submit</button>
    </form>
  )
}