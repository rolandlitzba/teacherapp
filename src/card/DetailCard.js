import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCardDetails = styled.form`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  margin: 15px;
  padding: 10px 20px;
  display: grid;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  margin: 10px;
  justify-self: center;
  width: 15%;
`;

const StyledDeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  margin: 10px 0;
  justify-self: right;
  width: 15%;
`;

const StyledLabel = styled.label`
  display: grid;
  font-size: 1.2em;
  margin: 30px 0 0;
`;

const StyledStudentInformation = styled.p`
  color: #818988;
  margin: 0;
  padding: 10px;
  margin: 0 0 30px;
`;

const StyledInput = styled.input`
  color: #818988;
  font-size: 1.2em;
  margin: 0;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px 10px;
`;

export default function DetailCard({ card, onDelete, history, onUpdate }) {
  const { name, absence, comments, id } = card;
  const [isEditable, setIsEditable] = useState(false);

  function onDeleteClick() {
    onDelete(id);
    history.push('/');
  }

  function cancelChange() {
    setIsEditable(!isEditable);
  }

  function submitChange(event) {
    event.preventDefault();
    const form = event.target;
    onUpdate({
      name: form.name.value,
      absence: form.absence.value,
      comments: form.comments.value,
      id
    });
    setIsEditable(!isEditable);
  }

  return isEditable ? (
    <StyledCardDetails onSubmit={submitChange}>
      <StyledLabel>
        Name:
        <StyledStudentInformation>
          <StyledInput name="name" StyledInput defaultValue={name} />
        </StyledStudentInformation>
      </StyledLabel>

      <StyledLabel>
        Absence:
        <StyledStudentInformation>
          <StyledInput
            name="absence"
            StyledInput
            type="number"
            defaultValue={absence}
          />
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
            src={process.env.PUBLIC_URL + '/Confirm.svg'}
            alt="Confirm icon"
          />
        </StyledButton>
        <StyledButton onClick={cancelChange}>
          <img src={process.env.PUBLIC_URL + '/Cancel.svg'} alt="Cancel icon" />
        </StyledButton>
      </StyledButtonWrapper>
    </StyledCardDetails>
  ) : (
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
        Fehltage:
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
          src={process.env.PUBLIC_URL + '/Edit.svg'}
          width="80%"
          alt="Edit icon"
        />
      </StyledButton>
    </StyledCardDetails>
  );
}
