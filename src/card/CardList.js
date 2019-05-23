import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledCardList = styled.section`
  background: #fcffff;
  padding: 20px;
`;

export default function CardList({ cards }) {
  return (
    <StyledCardList>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </StyledCardList>
  );
}
