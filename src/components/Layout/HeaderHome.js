import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-image: linear-gradient(50deg, #b1deb5, #7dbcbb 45%, #3290ba);
  text-align: center;
  height: 220px;
`;

const StyledName = styled.h1`
  color: #fcffff;
  font-size: 1.4em;
  padding: 20px;
  margin: 0;
`;

const StyledDate = styled.div`
  color: #fcffff;
  font-size: 1.5em;
  margin-top: 35px;
`;

const StyledWeekday = styled.div`
  color: #fcffff;
  font-size: 1.6em;
  font-weight: bold;
  margin-top: 10px;
  letter-spacing: 2px;
`;

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const newDate = new Date();
const nameOfDay = newDate.toLocaleDateString('en-EN', { weekday: 'long' });
const date = year + '-' + month + '-' + day;

export default function HeaderHome() {
  return (
    <StyledHeader>
      <StyledName>MyClass</StyledName>
      <StyledDate>{date}</StyledDate>
      <StyledWeekday>{nameOfDay}</StyledWeekday>
    </StyledHeader>
  );
}
