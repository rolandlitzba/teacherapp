import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-image: linear-gradient(45deg, #3290ba, #7dbcbb, #b1deb5);
  color: #fcffff;
  font-size: 1.4em;
  padding: 20px;
  text-align: center;
`;

export default function Header() {
  return <StyledHeader>Header</StyledHeader>;
}
