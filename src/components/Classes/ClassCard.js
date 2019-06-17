import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCard = styled(Link)`
  align-items: center;
  background: white;
  border: solid 1px #e5e8ef;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  border-radius: 12px;
  display: flex;
  font-size: 1.2em;
  justify-content: center;
  margin: 15px;
  min-height: 150px;
  min-width: 150px;
  padding: 10px 20px;
  text-decoration: none;
`;

const StyledInformation = styled.p`
  color: #7ababb;
  font-size: 1.3em;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;

export default function ClassCard({ classItem }) {
  const { classname, classId } = classItem;
  return (
    <StyledCard to={`/classes/${classId}`}>
      <StyledInformation>{classname}</StyledInformation>
    </StyledCard>
  );
}
