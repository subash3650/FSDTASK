import React from "react";

function InputField({ name, value, onchange, error, placeholder }) {
  return (
    <>
      <input
        name={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      />
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default InputField;
