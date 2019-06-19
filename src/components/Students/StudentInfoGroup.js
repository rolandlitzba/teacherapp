import React from 'react';
import {
  StyledStudentInfoLabel,
  StyledStudentInformation
} from './StudentsStyles';

function StudentInfoGroup({ label, name, value }) {
  return (
    <StyledStudentInfoLabel>
      {label ? label : null}
      <StyledStudentInformation name={name}>{value}</StyledStudentInformation>
    </StyledStudentInfoLabel>
  );
}
export default StudentInfoGroup;
