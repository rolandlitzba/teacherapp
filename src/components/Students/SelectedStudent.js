import React, { useState } from 'react';
import styled from 'styled-components';
import InputGroup from '../Common/InputGroup';

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

const StyledInput = styled.input`
  color: #818988;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1em;
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

export default function SelectedStudent({
  classes,
  match,
  onStudentDelete,
  history,
  onStudentUpdate
}) {
  const selectedStudent = classes.students.find(
    student => student.id === match.params.studentId
  );
  const { name, absence, comments, id } = selectedStudent;
  const [isEditable, setIsEditable] = useState(false);

  function cancelChange() {
    setIsEditable(!isEditable);
  }

  function onDeleteClick() {
    onStudentDelete(id, classes);
    history.push('/classes');
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onStudentUpdate({
      name: form.name.value,
      absence: form.absence.value,
      comments: form.comments.value,
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
      <InputGroup placeholder="huhu" value={name} />
      {/* <StyledLabel>
        Name:
        <StyledStudentInformation>
          <StyledInput name="name" defaultValue={name} />
        </StyledStudentInformation>
      </StyledLabel> */}
      <StyledLabel>
        Absence:
        <StyledStudentInformation>
          <StyledInput name="absence" type="number" defaultValue={absence} />
        </StyledStudentInformation>
      </StyledLabel>
      <StyledLabel>
        Comments:
        <StyledStudentInformation>
          <StyledInput name="comments" defaultValue={comments} />
        </StyledStudentInformation>
      </StyledLabel>
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

/*

const options = ["name", "comments", "absence"]

{options.map(option => {return (<StyledInformation{"option"}/>)})}

function StyledInformation(option){
  return (<StyledLabel>
  {option}:
  <StyledStudentInformation name={option}>
    {option}
  </StyledStudentInformation>
  </StyledLabel>)
}

*/
