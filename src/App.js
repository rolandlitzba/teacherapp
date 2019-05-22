import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import ClassList from './ClassList';
import GlobalStyles from './GlobalStyles';

const Grid = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`;

const Main = styled.main``;

export default function App() {
  return (
    <Grid>
      <GlobalStyles />
      <Header />
      <Main>
        <ClassList />
      </Main>
      <Footer />
    </Grid>
  );
}
