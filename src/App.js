import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import CardList from './card/CardList';
import GlobalStyles from './misc/GlobalStyles';
import Form from './form/Form';
import DetailCard from './card/DetailCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Modal from './modal/Modal';
import useModal from './modal/useModal';

const mockdata = require('./mockdata.json');

const Grid = styled.div`
  display: grid;
  grid-template-rows: 75px auto 60px;
  height: 100vh;
`;

const Main = styled.main``;

export default function App() {
  const [cards, setCards] = useState(mockdata || []);
  const { Showing, toggle } = useModal();

  function createCard(data) {
    const newCards = [...cards, data];
    setCards(newCards);
  }

  function findCard(id) {
    const card = cards.find(card => card.id === id);
    return card;
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
          <Route
            path="/details/:id"
            render={props => (
              <DetailCard card={findCard(props.match.params.id)} />
            )}
          />
          <button className="button-default" onClick={toggle}>
            Show Modal
          </button>
          <Modal Showing={Showing} hide={toggle} />
        </Main>
        <Footer />
      </Grid>
    </Router>
  );
}
