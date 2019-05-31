import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import CardList from '../card/CardList';
import GlobalStyles from '../misc/GlobalStyles';
import DetailCard from '../card/DetailCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ModalForm from '../Form/ModalForm';
import useModalForm from '../Form/useModalForm';

const mockdata = require('../mockdata.json');

const Grid = styled.div`
  display: grid;
  grid-template-rows: 70px auto 50px;
  height: 100vh;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

const StyledAddButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 60px;
  font-size: 1.2em;
`;

export default function App() {
  const [cards, setCards] = useState(mockdata || []);
  const { Showing, toggle } = useModalForm();

  function createCard(data) {
    const newCards = [...cards, data];
    setCards(newCards);
  }

  function findCard(id) {
    const card = cards.find(card => card.id === id);
    return card;
  }

  function handleDelete(id) {
    const index = cards.findIndex(card => card.id === id);
    setCards([...cards.slice(0, index), ...cards.slice(index + 1)]);
  }

  function handleUpdateAbsence(editedCard) {
    console.log(editedCard);
    const index = cards.findIndex(card => card.id === editedCard.id);

    const updatedCard = { ...cards[index], absence: editedCard.absence };

    console.log(updatedCard);
    setCards([
      ...cards.slice(0, index),
      updatedCard,
      ...cards.slice(index + 1)
    ]);
  }

  useEffect(() => console.log(cards), [cards]);

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Header />
        <Main>
          <Route exact path="/" render={() => <CardList cards={cards} />} />
          <Route
            path="/details/:id"
            render={props => (
              <DetailCard
                card={findCard(props.match.params.id)}
                onDelete={handleDelete}
                {...props}
                onUpdate={handleUpdateAbsence}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={props => (
              <>
                <StyledAddButton className="button-default" onClick={toggle}>
                  Add Student
                </StyledAddButton>
                <ModalForm
                  handleSubmitForm={data => createCard(data)}
                  history={props.history}
                  Showing={Showing}
                  hide={toggle}
                />
              </>
            )}
          />
        </Main>
        <Footer />
      </Grid>
    </Router>
  );
}
