import React from "react";

export default function NumberInput(props) {

  const {name, className, value, onChange, placeHolder, label} = { ...props };

  return (
    <div className={className}>
    {label && <label for={name}>{label}</label>}
    <input
      name={name}
      type="number"
      min="0"
      placeholder={placeHolder ? placeHolder : ""}
      value={value}
      onChange={onChange}
    />
    </div>
  );
}
