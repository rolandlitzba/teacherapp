import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-image: linear-gradient(45deg, #b1deb5, #7dbcbb 45%, #3290ba);
  text-align: center;
  height: 60px;
`;

const StyledName = styled.h1`
  color: #fcffff;
  font-size: 1.4em;
  padding: 20px;
  margin: 0;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledName>MyClass</StyledName>
    </StyledHeader>
  );
}
