import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCardList = styled.section`
  background: #fcffff;
  padding: 20px;
`;

const StyledItem = styled(Link)``;

export default function ClassListing({ cards }) {
  return (
    <StyledCardList>
      <h2>{cards.classname}</h2>
      {cards.students.map(student => {
        return (
          <StyledItem
            key={student.id}
            to={`/classes/${cards.id}/student/${student.id}`}
          >
            <h3 key={student.id}>{student.name}</h3>
          </StyledItem>
        );
      })}
    </StyledCardList>
  );
}
