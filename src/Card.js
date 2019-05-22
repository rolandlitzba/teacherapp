import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.section`
  padding: 10px 20px;
  background: fcffff;
  border: solid 1px #e5e8ef;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  border-radius: 12px;
  margin: 15px;
`;

const StyledStudentInformation = styled.p`
  color: #818988;
`;

export default function Card() {
  return (
    <StyledCard>
      <h3>Jyn Erso</h3>
      <StyledStudentInformation>Fehltage: 2</StyledStudentInformation>
    </StyledCard>
  );
}
