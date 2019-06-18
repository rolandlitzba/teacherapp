import React from 'react';
import {
  StyledStudentInfoLabel,
  StyledStudentEditInput
} from './StudentsStyles';

function StudentInputGroup({
  label,
  name,
  onChange,
  placeholder,
  type,
  value
}) {
  return (
    <StyledStudentInfoLabel>
      {label ? label : null}
      <StyledStudentEditInput
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type || 'text'}
        value={value}
      />
    </StyledStudentInfoLabel>
  );
}

export default StudentInputGroup;
