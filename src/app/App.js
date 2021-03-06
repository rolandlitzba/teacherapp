import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/Common/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Layout/Header';
import HeaderHome from '../components/Layout/HeaderHome';
import Footer from '../components/Layout/Footer';
import Home from '../components/Layout/Home';
import {
  setLocal,
  postClass,
  deleteClass,
  updateStudent,
  getClass,
  getLocal
} from '../services';
import ClassList from '../components/Classes/ClassList';
import Class from '../components/Classes/Class';
import AllStudents from '../components/Students/AllStudents';
import Student from '../components/Students/Student';
import CreateNewStudent from '../components/Students/CreateNewStudent';
import CreateNewClass from '../components/Classes/CreateNewClass';
import useCreateNewClass from '../components/Classes/useCreateNewClass';

const Grid = styled.div`
  display: grid;
  grid-template-rows: min-content auto 50px;
  height: 100vh;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

const StyledAddButton = styled.button`
  background: none;
  border: none;
  bottom: 7%;
  font-size: 1.2em;
  padding: 0;
  position: absolute;
  right: 3%;
`;

export default function App() {
  const [classes, setClasses] = useState(getLocal('classes') || []);
  const { isShowing, toggle } = useCreateNewClass();

  useEffect(() => {
    setLocal('classes', classes);
  }, [classes]);

  useEffect(() => {
    getClass('classes')
      .then(data => setClasses(data))
      .catch(error => console.log(error));
  }, []);

  function handleCreateNewClass(data) {
    const newClass = {
      classname: data.classname,
      classId: data.classId,
      students: []
    };

    setClasses(prevState => [...prevState, newClass]);
    postClass(newClass);
  }

  function handleDeleteClassById(classId) {
    const index = classes.findIndex(card => card.classId === classId);
    setClasses([...classes.slice(0, index), ...classes.slice(index + 1)]);
    deleteClass(classId);
  }

  function handleCreateNewStudent(data, classId) {
    const classIndex = classes.findIndex(card => card.classId === classId);
    const { students } = classes[classIndex];
    const updatedClass = {
      ...classes[classIndex],
      students: [
        ...students,
        {
          name: data.name,
          id: data.id,
          img:
            'https://res.cloudinary.com/dvdsptlml/image/upload/v1560865936/vknej32qansc0wixhauj.svg',
          absence: 0,
          comments: 'no comments'
        }
      ]
    };
    setClasses([
      ...classes.slice(0, classIndex),
      updatedClass,
      ...classes.slice(classIndex + 1)
    ]);
    updateStudent(updatedClass);
  }

  function handleUpdateByStudent(data, classId) {
    const classIndex = classes.findIndex(card => card.classId === classId);
    const { students } = classes[classIndex];
    const studentIndex = classes[classIndex].students.findIndex(
      student => student.id === data.id
    );
    const updatedStudent = {
      name: data.name,
      id: data.id,
      img: data.img,
      absence: data.absence,
      comments: data.comments
    };
    const updatedClass = {
      ...classes[classIndex],
      students: [
        ...students.slice(0, studentIndex),
        updatedStudent,
        ...students.slice(studentIndex + 1)
      ]
    };
    setClasses([
      ...classes.slice(0, classIndex),
      updatedClass,
      ...classes.slice(classIndex + 1)
    ]);
    updateStudent(updatedClass);
  }

  function handleDeleteStudentById(id, data) {
    const classIndex = classes.findIndex(card => card.classId === data.classId);
    const studentIndex = classes[classIndex].students.findIndex(
      student => student.id === id
    );
    const { students } = classes[classIndex];
    const updatedClass = {
      ...classes[classIndex],
      classname: data.classname,
      classId: data.classId,
      students: [
        ...students.slice(0, studentIndex),
        ...students.slice(studentIndex + 1)
      ]
    };
    setClasses([
      ...classes.slice(0, classIndex),
      updatedClass,
      ...classes.slice(classIndex + 1)
    ]);
    updateStudent(updatedClass);
  }

  function handleFindClassById(classId) {
    const selectedClass = classes.find(card => card.classId === classId);
    return selectedClass;
  }

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Switch>
          <HeaderHome exact path="/" />
          <Header path="*" />
        </Switch>
        <Main>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/classes"
            render={() => <ClassList classes={classes} />}
          />
          <Route
            exact
            path="/classes"
            render={props => (
              <>
                <StyledAddButton className="button-default" onClick={toggle}>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/Add.svg'}
                    alt="Add icon"
                  />
                </StyledAddButton>
                <CreateNewClass
                  onClassCreate={data => handleCreateNewClass(data)}
                  history={props.history}
                  isShowing={isShowing}
                  hide={toggle}
                />
              </>
            )}
          />
          <Route
            exact
            path="/classes/:classId"
            render={props => (
              <Class
                classes={handleFindClassById(props.match.params.classId)}
                onClassDelete={handleDeleteClassById}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/classes/:classId"
            render={props => (
              <>
                <StyledAddButton className="button-default" onClick={toggle}>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/Add.svg'}
                    alt="Add icon"
                  />
                </StyledAddButton>
                <CreateNewStudent
                  classes={handleFindClassById(props.match.params.classId)}
                  onNewStudentSubmit={data =>
                    handleCreateNewStudent(
                      data,
                      handleFindClassById(props.match.params.classId).classId
                    )
                  }
                  isShowing={isShowing}
                  hide={toggle}
                />
              </>
            )}
          />
          <Route
            exact
            path="/classes/:classId/student/:studentId"
            render={props => (
              <Student
                classes={handleFindClassById(props.match.params.classId)}
                onStudentDelete={(id, data) =>
                  handleDeleteStudentById(id, data)
                }
                {...props}
                onStudentUpdate={data =>
                  handleUpdateByStudent(
                    data,
                    handleFindClassById(props.match.params.classId).classId
                  )
                }
              />
            )}
          />
          <Route
            exact
            path="/students"
            render={() => <AllStudents classes={classes} />}
          />
        </Main>
        <Footer />
      </Grid>
    </Router>
  );
}
