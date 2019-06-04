import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavComponentes = styled(Link)``;

export default function Home() {
  return (
    <StyledNavComponentes to={`/classes`}>
      <div>Classes</div>
    </StyledNavComponentes>
  );
}
