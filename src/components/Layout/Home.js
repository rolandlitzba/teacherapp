import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
`;

const StyledNavComponents = styled(Link)`
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

const StyledImage = styled.img`
  padding: 10% 10%;
`;

export default function Home() {
  return (
    <Wrapper>
      <StyledNavComponents to={`/classes`}>
        <StyledImage
          src={process.env.PUBLIC_URL + '/assets/class.svg'}
          width="80%"
          alt="Class icon"
        />
        <div>Classes</div>
      </StyledNavComponents>
      <StyledNavComponents to={`/students`}>
        <StyledImage
          src={process.env.PUBLIC_URL + '/assets/student.svg'}
          width="80%"
          alt="Student icon"
        />
        <div>Students</div>
      </StyledNavComponents>
    </Wrapper>
  );
}
