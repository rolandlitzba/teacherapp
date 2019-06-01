import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledFooter = styled.footer`
  background: #fcffff;
  border-top: solid #e5e8ef;
  color: #818988;
  font-size: 1.2em;
  padding: 12px;
  text-align: center;
`;

const StyledBackButton = styled(NavLink)``;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledBackButton exact to="/">
        Back
      </StyledBackButton>
    </StyledFooter>
  );
}
