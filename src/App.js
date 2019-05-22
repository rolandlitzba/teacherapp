import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled, { createGlobalStyle } from 'styled-components';
import ClassList from './ClassList';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;margin: 0;
  padding: 0;
  }
`;

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
