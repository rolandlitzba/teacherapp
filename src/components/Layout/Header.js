import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-image: linear-gradient(45deg, #b1deb5, #7dbcbb, #3290ba);
  text-align: center;
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
