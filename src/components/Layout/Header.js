import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-image: linear-gradient(45deg, #b1deb5, #7dbcbb, #3290ba);
  color: #fcffff;
  font-size: 1.4em;
  padding: 20px;
  text-align: center;
`;

export default function Header() {
  return <StyledHeader>MyClass</StyledHeader>;
}
