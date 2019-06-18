import React from 'react';
import { Wrapper, StyledNavComponents, StyledImage } from './LayoutStyles';

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
