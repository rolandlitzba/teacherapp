import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledClassList = styled.section`
  background: #fcffff;
  padding: 20px;
`;

export default function ClassList() {
  return (
    <StyledClassList>
      <Card />
      <Card />
      <Card />
    </StyledClassList>
  );
}
