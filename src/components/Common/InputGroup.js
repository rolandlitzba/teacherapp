import React from 'react';

function InputGroup({ type, placeholder, name, value, onChange, label }) {
  return (
    <label>
      {label ? label : null}
      <input
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default InputGroup;
