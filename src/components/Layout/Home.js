import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
`;

const StyledNavComponentes = styled(Link)`
  align-items: center;
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  color: black;
  display: flex;
  font-size: 1.2em;
  justify-content: center;
  margin: 15px;
  min-height: 150px;
  min-width: 150px;
  padding: 10px 20px;
  text-decoration: none;
`;

export default function Home() {
  return (
    <Wrapper>
      <StyledNavComponentes to={`/classes`}>
        <div>Classes</div>
      </StyledNavComponentes>
      <StyledNavComponentes to={`/students`}>
        <div>Students</div>
      </StyledNavComponentes>
    </Wrapper>
  );
}