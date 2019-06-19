import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  border-top: solid #e5e8ef;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 10px 40px;
`;

export const StyledHeader = styled.header`
  background-image: linear-gradient(50deg, #b1deb5, #7dbcbb 45%, #3290ba);
  text-align: center;
  height: 60px;
  padding: 20px;
`;

export const StyledHomeHeader = styled.header`
  background-image: linear-gradient(50deg, #b1deb5, #7dbcbb 45%, #3290ba);
  text-align: center;
  height: 210px;
`;
export const StyledHomeButton = styled(Link)``;

export const StyledName = styled(Link)`
  color: #fcffff;
  font-size: 1.4em;
  font-weight: bold;
  padding: 20px;
  text-decoration: none;
`;

export const StyledHomeName = styled.h1`
  color: #fcffff;
  font-size: 1.4em;
  padding: 20px;
  margin: 0;
`;

export const StyledDate = styled.div`
  color: #fcffff;
  font-size: 1.5em;
  margin-top: 35px;
`;

export const StyledWeekday = styled.div`
  color: #fcffff;
  font-size: 1.6em;
  font-weight: bold;
  margin-top: 10px;
  letter-spacing: 2px;
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
`;

export const StyledNavComponents = styled(Link)`
  align-items: center;
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  color: #7ababb;
  display: grid;
  font-size: 1.2em;
  justify-items: center;
  margin: 15px;
  min-height: 150px;
  min-width: 150px;
  padding: 10px 20px;
  text-decoration: none;
`;

export const StyledImage = styled.img`
  padding: 10% 10%;
`;

export const StyledBackButtonWrapper = styled.div``;
