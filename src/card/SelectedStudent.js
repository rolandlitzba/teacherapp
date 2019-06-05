import React from 'react';
import styled from 'styled-components';

const StyledCardDetails = styled.form`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  display: grid;
  margin: 15px;
  padding: 10px 20px;
`;

const StyledLabel = styled.label`
  display: grid;
  font-size: 1.2em;
  margin: 30px 0 0;
`;

const StyledStudentInformation = styled.p`
  color: #818988;
  margin: 0 0 30px;
`;

export default function SelectedStudent({ cards, match }) {
  const selectedStudent = cards.students.find(
    student => student.id === match.params.studentId
  );
  const { name, absence, comments } = selectedStudent;
  return (
    <StyledCardDetails>
      <StyledLabel>
        Name:
        <StyledStudentInformation name="name">{name}</StyledStudentInformation>
      </StyledLabel>
      <StyledLabel>
        Absence:
        <StyledStudentInformation name="absence">
          {absence}
        </StyledStudentInformation>
      </StyledLabel>
      <StyledLabel>
        Comments:
        <StyledStudentInformation name="comments">
          {comments}
        </StyledStudentInformation>
      </StyledLabel>
    </StyledCardDetails>
  );
}
