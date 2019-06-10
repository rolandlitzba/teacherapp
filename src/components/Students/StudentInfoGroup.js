import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: grid;
  font-size: 1.2em;
  margin: 30px 0 0;
`;

const StyledStudentInformation = styled.p`
  color: #818988;
  margin: 0 0 30px;
`;

function StudentInfoGroup({ label, name, value }) {
  return (
    <StyledLabel>
      {label ? label : null}
      <StyledStudentInformation name={name}>{value}</StyledStudentInformation>
    </StyledLabel>
  );
}
export default StudentInfoGroup;
