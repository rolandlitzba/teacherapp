import React from 'react';
import styled from 'styled-components';
import ClassCard from './ClassCard';

const StyledCardList = styled.section`
  background: #fcffff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
`;

export default function ClassList({ classes }) {
  return (
    <StyledCardList>
      {classes.map(classItem => {
        return <ClassCard key={classItem.classId} classItem={classItem} />;
      })}
    </StyledCardList>
  );
}
