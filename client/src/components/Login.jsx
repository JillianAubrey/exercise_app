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

  return  (
    <form onSubmit={handleSubmit}>
      This is the login form
      {error && <Error>{String(error)}</Error>}
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