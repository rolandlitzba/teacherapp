import React from 'react';
import styled from 'styled-components';
import ClassCard from './ClassCard';

const StyledCardList = styled.section`
  background: #fcffff;
  padding: 20px;
`;

export default function ClassList({ cards }) {
  return (
    <StyledCardList>
      {cards.classes.map(card => {
        return <ClassCard key={card.id} card={card} />;
      })}
    </StyledCardList>
  );
}
