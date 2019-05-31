import React from 'react';
import styled from 'styled-components';

const StyledCardDetails = styled.section`
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

export default function DetailCard({ card, onDelete, history }) {
  const { name, absence, comments, id } = card;

  function onDeleteClick() {
    onDelete(id);
    history.push('/');
  }

  return (
    <StyledCardDetails>
      <StyledHeading>{name}</StyledHeading>
      <StyledStudentInformation>Fehltage: {absence}</StyledStudentInformation>
      <StyledStudentInformation>Comments: {comments}</StyledStudentInformation>
      <StyledDeleteButton onClick={onDeleteClick}>Delete</StyledDeleteButton>
    </StyledCardDetails>
  );
}
