import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavComponentes = styled(Link)`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  color: black;
  display: grid;
  flex-direction: column;
  margin: 15px;
  padding: 10px 20px;
  text-decoration: none;
`;

export default function Home() {
  return (
    <>
      <StyledNavComponentes to={`/classes`}>
        <div>Classes</div>
      </StyledNavComponentes>
      <StyledNavComponentes to={`/students`}>
        <div>Students</div>
      </StyledNavComponentes>
    </>
  );
}
