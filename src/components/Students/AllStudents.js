import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCardList = styled.section`
  display: grid;
  padding: 20px;
`;

const StyledHeader = styled.h2`
  color: #7ababb;
  font-size: 1.7em;
  font-weight: bold;
`;

const StyledItem = styled(Link)`
  margin: 0 0 20px;
  text-decoration: none;
  &:visited {
    color: #818988;
    text-decoration: none;
  }
`;

const StyledClassWrapper = styled.section`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  color: black;
  display: grid;
  flex-direction: column;
  margin: 15px;
  padding: 10px 20px;
  text-decoration: none;
`;

const StyledWrapper = styled.div`
  margin: 10px 0;
`;

export default function AllStudents({ classes }) {
  return (
    <StyledCardList>
      {classes.map(classItem => {
        return (
          <StyledClassWrapper key={classItem.classId}>
            <StyledHeader>{classItem.classname}</StyledHeader>
            {classItem.students.map(student => (
              <StyledWrapper key={student.id}>
                <StyledItem
                  to={`/classes/${classItem.classId}/student/${student.id}`}
                >
                  {student.name}
                </StyledItem>
              </StyledWrapper>
            ))}
          </StyledClassWrapper>
        );
      })}
    </StyledCardList>
  );
}
