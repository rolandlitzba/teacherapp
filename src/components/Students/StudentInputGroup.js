import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: grid;
  font-size: 1.2em;
  margin: 30px 0 0;
`;

const StyledInput = styled.input`
  color: #818988;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1em;
`;

function StudentInputGroup({
  label,
  name,
  onChange,
  placeholder,
  type,
  value
}) {
  return (
    <StyledLabel>
      {label ? label : null}
      <StyledInput
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type || 'text'}
        value={value}
      />
    </StyledLabel>
  );
}

export default StudentInputGroup;
