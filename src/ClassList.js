import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledClassList = styled.section`
  background: #fcffff;
  padding: 20px;
`;

export default function ClassList({ cards }) {
  return (
    <StyledClassList>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </StyledClassList>
  );
}
