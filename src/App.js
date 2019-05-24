import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import CardList from './card/CardList';
import GlobalStyles from './misc/GlobalStyles';
import Form from './form/Form';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    <Router>
      <Grid>
        <GlobalStyles />
        <Header />
        <Main>
          <Route exact path="/" render={() => <CardList cards={cards} />} />
          <Route
            path="/create"
            render={props => (
              <Form
                handleSubmitForm={data => createCard(data)}
                history={props.history}
              />
            )}
          />
        </Main>
        <Footer />
      </Grid>
    </Router>
  );
}
