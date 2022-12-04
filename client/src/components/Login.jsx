import React, { Fragment, useState } from "react";
import useForm from "../hooks/useForm";
import EmailInput from "./form_elements/EmailInput";
import PasswordInput from "./form_elements/PasswordInput";
import formatApiErrors from "../helpers/formatApiErrors";
import SmallButton from "./buttons_toggles/SmallButton";
import Error from "./Error";
import postLogin from "../helpers/api_requests/postLogin";
import './Login.scss';

export default function Login(props) {
  const { setUser } = props
  const { handleInputChange, data} = useForm({email: '', password: ''})
  const [ error, setError ] = useState('')

  const onLogin = (params) => {
    console.log('onLogin called')
    postLogin(
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
    onLogin(data)
  }
  
  let errorMessages = ''
  if (error) {
    errorMessages = formatApiErrors(
      error.response.data,
      (errorMessage) => <Error>{errorMessage}</Error>
    )
  }

  return  (
    <form onSubmit={handleSubmit}>
      {error && <Fragment>{errorMessages}</Fragment>}
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
      <SmallButton onClick={()=>{}}>Submit</SmallButton>
    </form>
  )
}