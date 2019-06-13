import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.h2`
  color: #7ababb;
  font-size: 1.7em;
  font-weight: bold;
`;

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

const StyledItem = styled(Link)`
  margin: 0 0 20px;
  text-decoration: none;
  &:visited {
    color: #818988;
    text-decoration: none;
  }
`;

const StyledDeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  justify-self: right;
  margin: 10px 0;
  width: 20%;
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
          width="80%"
          alt="Trash icon"
        />
      </StyledDeleteButton>
      <StyledHeader>{classname}</StyledHeader>
      {students.map(student => {
        return (
          <StyledItem
            key={student.id}
            to={`/classes/${classId}/student/${student.id}`}
          >
            {student.name}
          </StyledItem>
        );
      })}
    </StyledCardList>
  );
}
