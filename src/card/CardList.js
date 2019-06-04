import React from 'react';
import styled from 'styled-components';
/*import Card from './Card';*/

const StyledCardList = styled.section`
  background: #fcffff;
  padding: 20px;
`;

/*
export default function CardList({ cards }) {
  return (
    <StyledCardList>
      {cards.classes.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </StyledCardList>
  );
}
*/
export default function ClassList({ cards }) {
  return (
    <StyledCardList>
      {cards.classes.map(card => {
        return (
          <div>
            <h1 key={card.id}>{card.classname}</h1>
            {card.students.map(student => (
              <div>
                <h3 key={student.id}>{student.name}</h3>
              </div>
            ))}
          </div>
        );
      })}
    </StyledCardList>
  );
}
