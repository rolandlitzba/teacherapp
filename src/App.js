import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import ClassList from './ClassList';
import GlobalStyles from './GlobalStyles';

const mockdata = require('./mockdata.json');

const Grid = styled.div`
  display: grid;
  grid-template-rows: 75px auto 60px;
  height: 100vh;
`;

const Main = styled.main``;

export default function App() {
  const [cards, setCards] = useState(mockdata || []);

  return (
    <Grid>
      <GlobalStyles />
      <Header />
      <Main>
        <ClassList cards={cards} />
      </Main>
      <Footer />
    </Grid>
  );
}
