import React from "react";


export default function TextInput(props) {

  const {name, className, value, onChange, placeHolder, label} = { ...props };

  return (
    <div className={className}>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      name={name}
      type="text"
      placeholder={placeHolder ? placeHolder : ""}
      value={value}
      onChange={onChange}
    />
    </div>
  );
}