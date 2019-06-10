import React, { useState } from 'react';
import styled from 'styled-components';
import StudentInputGroup from './StudentInputGroup';
import StudentInfoGroup from './StudentInfoGroup';

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
  justify-self: right;
  margin: 10px 0;
  width: 20%;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px 10px;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  justify-self: center;
  margin: 10px;
  width: 20%;
`;

export default function Student({
  classes,
  history,
  match,
  onStudentDelete,
  onStudentUpdate
}) {
  const selectedStudent = classes.students.find(
    student => student.id === match.params.studentId
  );
  const { name, absence, comments, id } = selectedStudent;
  const [isEditable, setIsEditable] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newAbsence, setNewAbsence] = useState(absence);
  const [newComments, setNewComments] = useState(comments);
  function cancelChange() {
    setIsEditable(!isEditable);
  }

  function onDeleteClick() {
    onStudentDelete(id, classes);
    history.push('/classes');
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onStudentUpdate({
      name: newName,
      absence: newAbsence,
      comments: newComments,
      id
    });
    setIsEditable(!isEditable);
  }

  return isEditable ? (
    <StyledCardDetails onSubmit={onFormSubmit}>
      <StyledDeleteButton onClick={onDeleteClick}>
        <img
          src={process.env.PUBLIC_URL + '/assets/Trash.svg'}
          width="80%"
          alt="Trash icon"
        />
      </StyledDeleteButton>
      <StudentInputGroup
        label="Name:"
        name="name"
        onChange={event => setNewName(event.target.value)}
        value={newName}
      />
      <StudentInputGroup
        label="Absence:"
        name="absence"
        type="number"
        onChange={event => setNewAbsence(event.target.value)}
        value={newAbsence}
      />
      <StudentInputGroup
        label="Comments:"
        name="comments"
        onChange={event => setNewComments(event.target.value)}
        value={newComments}
      />
      <StyledButtonWrapper>
        <StyledButton>
          <img
            src={process.env.PUBLIC_URL + '/assets/Confirm.svg'}
            alt="Confirm icon"
          />
        </StyledButton>
        <StyledButton onClick={cancelChange}>
          <img
            src={process.env.PUBLIC_URL + '/assets/Cancel.svg'}
            alt="Cancel icon"
          />
        </StyledButton>
      </StyledButtonWrapper>
    </StyledCardDetails>
  ) : (
    <StyledCardDetails>
      <StyledDeleteButton onClick={onDeleteClick}>
        <img
          src={process.env.PUBLIC_URL + '/assets/Trash.svg'}
          width="80%"
          alt="Trash icon"
        />
      </StyledDeleteButton>
      <StudentInfoGroup label="Name:" name="name" value={name} />
      <StudentInfoGroup label="Absence:" name="absence" value={absence} />
      <StudentInfoGroup label="Comments:" name="comments" value={comments} />
      <StyledButton onClick={() => setIsEditable(!isEditable)}>
        <img
          src={process.env.PUBLIC_URL + '/assets/Edit.svg'}
          width="80%"
          alt="Edit icon"
        />
      </StyledButton>
    </StyledCardDetails>
  );
}
