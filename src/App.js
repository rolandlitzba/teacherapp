import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import CardList from './card/CardList';
import GlobalStyles from './misc/GlobalStyles';
import Form from './Form';

const mockdata = require('./mockdata.json');

const Grid = styled.div`
  display: grid;
  grid-template-rows: 75px auto 60px;
  height: 100vh;
`;

const Main = styled.main``;

export default function App() {
  const [cards, setCards] = useState(mockdata || []);

  function createCard(data) {
    const newCards = [...cards, data];
    setCards(newCards);
  }

  return (
    <Grid>
      <GlobalStyles />
      <Header />
      <Main>
        <Form onFormSubmit={data => createCard(data)} />
        <CardList cards={cards} />
      </Main>
      <Footer />
    </Grid>
  );
}
