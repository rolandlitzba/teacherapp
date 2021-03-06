import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  StyledFooter,
  StyledBackButtonWrapper,
  StyledHomeButton
} from './LayoutStyles';

const GoBack = ({ history }) => (
  <StyledBackButtonWrapper onClick={() => history.goBack()} alt="Go back">
    <img
      alt="Back icon"
      height="28px"
      src={process.env.PUBLIC_URL + '/assets/Back.svg'}
      width="28px"
    />
  </StyledBackButtonWrapper>
);

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
