import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import CardList from '../card/CardList';
import ClassList from '../card/ClassList';
import GlobalStyles from '../misc/GlobalStyles';
import DetailCard from '../card/DetailCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ModalForm from '../Form/ModalForm';
import useModalForm from '../Form/useModalForm';
import { getLocal, setLocal } from '../services';

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
  background: none;
  border: none;
  bottom: 50px;
  font-size: 1.2em;
  padding: 0;
  position: absolute;
  right: 10px;
`;

export default function App() {
  const [cards, setCards] = useState(getLocal('cards') || mockdata);
  const { Showing, toggle } = useModalForm();
  useEffect(() => {
    setLocal('cards', cards);
  }, [cards]);

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

  function handleUpdate(editedCard) {
    const index = cards.findIndex(card => card.id === editedCard.id);
    const updatedCard = {
      ...cards[index],
      name: editedCard.name,
      absence: editedCard.absence,
      comments: editedCard.comments
    };
    setCards([
      ...cards.slice(0, index),
      updatedCard,
      ...cards.slice(index + 1)
    ]);
  }

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Header />
        <Main>
          <Route exact path="/" render={() => <ClassList cards={cards} />} />
          <Route exact path="/:id" render={() => <CardList cards={cards} />} />
          <Route
            path="/classlist/:id"
            render={props => (
              <DetailCard
                card={findCard(props.match.params.id)}
                onDelete={handleDelete}
                {...props}
                onUpdate={handleUpdate}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={props => (
              <>
                <StyledAddButton className="button-default" onClick={toggle}>
                  <img
                    src={process.env.PUBLIC_URL + '/Add.svg'}
                    alt="Add icon"
                  />
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
