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

const StyledItem = styled.div``;

const StyledClassWrapper = styled.section`
  display: grid;
  flex-direction: column;
  margin: 15px;
  text-decoration: none;
`;

const StyledImage = styled.img`
  border: solid 1px #e5e8ef;
  border-radius: 50%;
  clip-path: circle(35px at center);
  width: 60px;
`;

const StyledInfoWrapper = styled(Link)`
  align-items: center;
  background: white;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  color: #818988;
  display: grid;
  grid-template-columns: 25% auto;
  margin: 0 0 20px;
  padding: 20px;
  text-decoration: none;
  &:visited {
    color: #818988;
    text-decoration: none;
  }
`;

export default function AllStudents({ classes }) {
  return (
    <StyledCardList>
      {classes.map(classItem => {
        return (
          <StyledClassWrapper key={classItem.classId}>
            <StyledHeader>{classItem.classname}</StyledHeader>
            {classItem.students.map(student => (
              <StyledInfoWrapper
                key={student.id}
                to={`/classes/${classItem.classId}/student/${
                  student.id
                }?origin=student`}
              >
                <StyledImage src={student.img} alt="Profile" />
                <StyledItem>{student.name}</StyledItem>
              </StyledInfoWrapper>
            ))}
          </StyledClassWrapper>
        );
      })}
    </StyledCardList>
  );
}
