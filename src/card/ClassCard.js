import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCard = styled(Link)`
  padding: 10px 20px;
  background: #fcffff;
  border: solid 1px #e5e8ef;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  border-radius: 12px;
  margin: 15px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

const StyledStudentInformation = styled.p`
  color: #818988;
  margin: 0;
  padding: 10px;
`;

export default function Card(cards) {
  const { classname, id } = cards.card;
  return (
    <StyledCard to={`/classes/${id}`}>
      <StyledStudentInformation>{classname}</StyledStudentInformation>
    </StyledCard>
  );
}
