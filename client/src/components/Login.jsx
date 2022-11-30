import React, { Fragment, useState } from "react";
import EmailInput from "./form_elements/EmailInput";
import PasswordInput from "./form_elements/PasswordInput";
import classnames from "classnames";
import './Login.scss';

export default function Login(props) {
  const { onLogin } = props
  const [ params, setParams ] = useState({email: '', password: ''})
  const [ errors, setErrors ] = useState('')

  const handleChange = (event) => {
    const { value, name } = event.target
    this.setState(prev => {
      return {
        ...prev, 
        [name]: value
      }
    })
    event.target.value = value
  }

  return  (
    <form >
      This is the login form
      <EmailInput
        name="email"
        label="Email"
        value={params.email}
        onChange={handleChange}
      />
    </form>
  )
}