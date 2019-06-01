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

const StyledDeleteButton = styled.button`
  font-size: 1.2em;
  margin: 10px;
  justify-content: center;
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
      absence: form.absence.value,
      id
    });
    setIsEditable(!isEditable);
  }

  return (
    <StyledCardDetails onSubmit={submitChange}>
      <StyledDeleteButton onClick={onDeleteClick}>Delete</StyledDeleteButton>
      <StyledLabel>
        Name:
        <StyledStudentInformation name="name">{name}</StyledStudentInformation>
      </StyledLabel>
      <StyledLabel>
        Fehltage:
        <StyledStudentInformation>
          {isEditable ? (
            <input type="number" name="absence" defaultValue={absence} />
          ) : (
            `${absence}`
          )}
          {isEditable ? (
            <>
              <button>submit</button>
              <span onClick={cancelChange}>cancel</span>
            </>
          ) : (
            <span onClick={() => setIsEditable(!isEditable)}>edit</span>
          )}
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
