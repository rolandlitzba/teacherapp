import React from 'react';
import styled from 'styled-components';

const StyledCardList = styled.section`
  background: #fcffff;
  padding: 20px;
`;

export default function AllStudentsList({ classes }) {
  return (
    <StyledCardList>
      {classes.map(classItem => {
        return (
          <div>
            <h1 key={classItem.id}>{classItem.classname}</h1>
            {classItem.students.map(student => (
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
