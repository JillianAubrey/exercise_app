import React from "react";

export default function TextArea(props) {
  const { name, className, value, onChange, placeHolder, rows, cols, label } = {
    ...props,
  };

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeHolder ? placeHolder : ""}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
