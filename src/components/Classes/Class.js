import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  StyledCardList,
  StyledHeader,
  StyledItem,
  StyledDeleteButton,
  StyledImage,
  StyledInfoWrapper
} from './ClassesStyles';

export default function Class({ classes, onClassDelete, history }) {
  const { classname, students, classId } = classes;

  function onDeleteClick() {
    onClassDelete(classId);
    history.replace('/classes');
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
