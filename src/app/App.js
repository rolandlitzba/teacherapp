import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import AllStudentsList from '../card/AllStudentsList';
import ClassesList from '../card/ClassesList';
import GlobalStyles from '../misc/GlobalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ModalForm from '../Form/ModalForm';
import useModalForm from '../Form/useModalForm';
import { getLocal, setLocal } from '../services';
import Home from '../Home';
import SelectedClass from '../card/SelectedClass';
import SelectedStudent from '../card/SelectedStudent';

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
  const [classes, setClasses] = useState(getLocal('classes') || mockdata);
  const { Showing, toggle } = useModalForm();
  console.log(classes);
  useEffect(() => {
    setLocal('classes', classes);
  }, [classes]);

  function createCard(data) {
    const newClass = [
      ...classes,
      {
        classname: data.classname,
        id: data.id,
        students: [{ name: '', id: '', absence: '', comments: '' }]
      }
    ];
    setClasses(newClass);
  }

  function findClassById(id) {
    const selectedClass = classes.find(card => card.id === id);
    return selectedClass;
  }

  function handleClassdelete(id) {
    const index = classes.findIndex(card => card.id === id);
    setClasses([...classes.slice(0, index), ...classes.slice(index + 1)]);
  }

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/classes"
            render={() => <ClassesList classes={classes} />}
          />
          <Route
            exact
            path="/classes"
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

          <Route
            exact
            path="/classes/:id"
            render={props => (
              <SelectedClass
                card={findClassById(props.match.params.id)}
                onDelete={handleClassdelete}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/classes/:classId/student/:studentId"
            render={props => (
              <SelectedStudent
                cards={findClassById(props.match.params.classId)}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/students"
            render={() => <AllStudentsList classes={classes} />}
          />
        </Main>
        <Footer />
      </Grid>
    </Router>
  );
}

/*
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

          <Route
            exact
            path="/classlist/:id"
            render={props => (
              <DetailCard
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
 */
