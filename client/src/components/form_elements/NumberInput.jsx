import React from "react";

export default function NumberInput(props) {

  const {name, className, value, onChange, placeHolder, label} = { ...props };

  return (
    <div className={className}>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      name={name}
      type="number"
      min="1"
      placeholder={placeHolder ? placeHolder : ""}
      value={value}
      onChange={onChange}
    />
    </div>
  );
}
