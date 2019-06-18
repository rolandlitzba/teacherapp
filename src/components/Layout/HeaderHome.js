import React from 'react';
import {
  StyledHomeHeader,
  StyledName,
  StyledDate,
  StyledWeekday
} from './LayoutStyles';

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const newDate = new Date();
const nameOfDay = newDate.toLocaleDateString('en-EN', { weekday: 'long' });
const date = year + '-' + month + '-' + day;

export default function HeaderHome() {
  return (
    <StyledHomeHeader>
      <StyledName>MyClass</StyledName>
      <StyledDate>{date}</StyledDate>
      <StyledWeekday>{nameOfDay}</StyledWeekday>
    </StyledHomeHeader>
  );
}
