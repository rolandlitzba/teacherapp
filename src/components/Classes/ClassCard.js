import React from 'react';
import { StyledCard, StyledInformation } from './ClassesStyles';

export default function ClassCard({ classItem }) {
  const { classname, classId } = classItem;
  return (
    <StyledCard to={`/classes/${classId}`}>
      <StyledInformation>{classname}</StyledInformation>
    </StyledCard>
  );
}
