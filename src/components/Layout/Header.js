import React from 'react';
import { StyledHeader, StyledName } from './LayoutStyles';

export default function Header() {
  return (
    <StyledHeader>
      <StyledName to="/">MyClass</StyledName>
    </StyledHeader>
  );
}
