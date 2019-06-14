import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCardList = styled.section`
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

const StyledHeader = styled.h2`
  color: #7ababb;
  font-size: 1.7em;
  font-weight: bold;
`;

const StyledItem = styled.div``;

const StyledDeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  justify-self: right;
  margin: 10px;
  width: 20%;
`;

const StyledImage = styled.img`
  clip-path: circle(35px at center);
`;

const StyledInfoWrapper = styled(Link)`
  align-items: center;
  display: grid;
  grid-template-columns: 25% auto;
  margin: 0 0 20px;
  text-decoration: none;
  &:visited {
    color: #818988;
    text-decoration: none;
  }
`;

export default function Class({ classes, onClassDelete, history }) {
  const { classname, students, classId } = classes;

  function onDeleteClick() {
    onClassDelete(classId);
    history.push('/classes');
  }

  return (
    <StyledCardList>
      <StyledDeleteButton onClick={onDeleteClick}>
        <img
          src={process.env.PUBLIC_URL + '/assets/Trash.svg'}
          alt="Trash icon"
        />
      </StyledDeleteButton>
      <StyledHeader>{classname}</StyledHeader>
      {students.map(student => {
        return (
          <StyledInfoWrapper
            key={student.id}
            to={`/classes/${classId}/student/${student.id}`}
          >
            <StyledImage src={student.img} alt="Profile" />
            <StyledItem>{student.name}</StyledItem>
          </StyledInfoWrapper>
        );
      })}
    </StyledCardList>
  );
}
