import React from 'react';
import styled from 'styled-components';
import ClassCard from './ClassCard';

const StyledCardList = styled.section`
  background: #fcffff;
  padding: 20px;
`;

export default function ClassList({ classes }) {
  return (
    <StyledCardList>
      {classes.map(classItem => {
        return <ClassCard key={classItem.id} classItem={classItem} />;
      })}
    </StyledCardList>
  );
}
