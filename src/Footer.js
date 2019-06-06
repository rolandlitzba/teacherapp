import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BackButton from './BackButton';

const StyledFooter = styled.footer`
  background: #fcffff;
  border-top: solid #e5e8ef;
  color: #818988;
  padding: 10px 40px;
  text-align: left;
`;

const StyledBackButton = styled(NavLink)``;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledBackButton exact to="/">
        <img
          src={process.env.PUBLIC_URL + '/Back.svg'}
          width="5%"
          alt="Back icon"
        />
      </StyledBackButton>
      <BackButton />
    </StyledFooter>
  );
}
