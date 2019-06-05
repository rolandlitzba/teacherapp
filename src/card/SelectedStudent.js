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

const StyledDeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  margin: 10px 0;
  justify-self: right;
  width: 20%;
`;

export default function SelectedStudent({ cards, match, onDelete, history }) {
  const selectedStudent = cards.students.find(
    student => student.id === match.params.studentId
  );
  const { name, absence, comments, id } = selectedStudent;

  function onDeleteClick() {
    onDelete(id, cards);
    history.push('/classes');
  }

  return (
    <StyledCardDetails>
      <StyledDeleteButton onClick={onDeleteClick}>
        <img
          src={process.env.PUBLIC_URL + '/Trash.svg'}
          width="80%"
          alt="Trash icon"
        />
      </StyledDeleteButton>
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
