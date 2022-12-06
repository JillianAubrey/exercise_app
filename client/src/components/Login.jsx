import React, { Fragment, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
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
  const [style] = useSpring(({ from: {opacity: 0.1}, to: {opacity: 1}, config: {duration: 400}, delay: 50}), [])

  const onLogin = (params) => {
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
  
    <animated.form onSubmit={handleSubmit} style={style}>
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
      <SmallButton>Submit</SmallButton>
    </animated.form>
  )
}