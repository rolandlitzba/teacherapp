import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const StyledFooter = styled.footer`
  border-top: solid #e5e8ef;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 10px 40px;
`;

const StyledBackButton = styled.div``;

const GoBack = ({ history }) => (
  <StyledBackButton onClick={() => history.goBack()} alt="Go back">
    <img
      src={process.env.PUBLIC_URL + '/assets/Back.svg'}
      alt="Back icon"
      width="28px"
      height="28px"
    />
  </StyledBackButton>
);

const StyledHomeButton = styled(Link)``;

export default function Footer() {
  const ShowLastPage = withRouter(GoBack);
  return (
    <StyledFooter>
      <ShowLastPage />
      <StyledHomeButton to="/" justify-self="center">
        <img
          src={process.env.PUBLIC_URL + '/assets/Home.svg'}
          width="30px"
          height="30px"
          alt="Home icon"
        />
      </StyledHomeButton>
    </StyledFooter>
  );
}
