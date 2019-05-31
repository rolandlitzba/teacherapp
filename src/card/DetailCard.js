import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCardDetails = styled.form`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  margin: 15px;
  padding: 10px 20px;
  text-decoration: none;
`;

const StyledStudentInformation = styled.p`
  color: #818988;
  margin: 0;
  padding: 10px;
`;

const StyledHeading = styled.h3`
  margin: 0;
  padding: 10px;
`;

const StyledDeleteButton = styled.button`
  font-size: 1.1em;
  margin: 10px;
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
    console.log(form.absence.value);
    onUpdate({
      absence: form.absence.value,
      id
    });
    setIsEditable(!isEditable);
  }

  return (
    <StyledCardDetails onSubmit={submitChange}>
      <StyledHeading name="name">{name}</StyledHeading>
      <StyledStudentInformation>
        {isEditable ? (
          <input type="number" name="absence" defaultValue={absence} />
        ) : (
          `Fehltage: ${absence}`
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
      <StyledStudentInformation name="comments">
        Comments: {comments}
      </StyledStudentInformation>
      <StyledDeleteButton onClick={onDeleteClick}>Delete</StyledDeleteButton>
    </StyledCardDetails>
  );
}
