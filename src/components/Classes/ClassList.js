import React from 'react';
import { StyledClassList } from './ClassesStyles';
import ClassCard from './ClassCard';

export default function ClassList({ classes }) {
  return (
    <StyledClassList>
      {classes.map(classItem => {
        return <ClassCard key={classItem.classId} classItem={classItem} />;
      })}
    </StyledClassList>
  );
}
