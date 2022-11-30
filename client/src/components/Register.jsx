import React, { Fragment, useState } from "react";
import useForm from "../hooks/useForm";
import TextInput from "./form_elements/TextInput";
import EmailInput from "./form_elements/EmailInput";
import PasswordInput from "./form_elements/PasswordInput";
import classnames from "classnames";
import './Register.scss';

export default function Register(props) {
  const { onRegister } = props
  const { handleInputChange, data} = useForm({name: '', email: '', password: '', password_confirmation: ''})
  const [ error, setError ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onRegister(data, setError)
  }

  return  (
    <form onSubmit={handleSubmit}>
      This is the regstration form
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