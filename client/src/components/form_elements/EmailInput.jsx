import React from "react";


export default function EmailInput(props) {

  const {name, className, value, onChange, placeHolder, label} = props;

  return (
    <div className={className}>
    {label && <label for={name}>{label}</label>}
    <input
      name={name}
      type="email"
      placeholder={placeHolder ? placeHolder : ""}
      value={value}
      onChange={onChange}
    />
    </div>
  );
}