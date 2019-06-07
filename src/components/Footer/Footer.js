import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const StyledFooter = styled.footer`
  border-top: solid #e5e8ef;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 10px 40px;
`;

const StyledBackButton = styled(NavLink)``;

const GoBack = ({ history }) => (
  <StyledBackButton onClick={() => history.goBack()} alt="Go back">
    <img
      src={process.env.PUBLIC_URL + '/assets/Back.svg'}
      width="5%"
      alt="Back icon"
    />
  </StyledBackButton>
);

export default function Footer() {
  const ShowLastPage = withRouter(GoBack);
  return (
    <StyledFooter>
      <ShowLastPage />
      <StyledBackButton exact to="/">
        <img
          src={process.env.PUBLIC_URL + '/assets/Home.svg'}
          width="5%"
          alt="Home icon"
        />
      </StyledBackButton>
    </StyledFooter>
  );
}
