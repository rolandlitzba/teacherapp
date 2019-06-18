import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import uid from 'uid';
import {
  StyledWrapper,
  StyledModal,
  StyledStudentCreateForm,
  StyledLabel,
  StyledInput,
  StyledEditButtonWrapper,
  StyledFormButton
} from './StudentsStyles';

export default function CreateNewStudent({
  history,
  onNewStudentSubmit,
  isShowing,
  hide
}) {
  const [newStudent, setNewStudent] = useState('');
  function onFormSubmit(event) {
    event.preventDefault();
    onNewStudentSubmit({
      name: newStudent,
      id: uid()
    });
    hide();
    setNewStudent('');
  }

  return isShowing
    ? ReactDOM.createPortal(
        <StyledModal>
          <StyledWrapper>
            <StyledStudentCreateForm
              history={history}
              hide={hide}
              onSubmit={onFormSubmit}
            >
              <StyledLabel>
                Student:
                <StyledInput
                  name="student"
                  value={newStudent}
                  onChange={e => setNewStudent(e.target.value)}
                  placeholder="Insert new student here"
                />
              </StyledLabel>
              <StyledEditButtonWrapper>
                <StyledFormButton>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/confirm.svg'}
                    width="80%"
                    alt="Confirm icon"
                  />
                </StyledFormButton>
                <StyledFormButton onClick={hide}>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/Cancel.svg'}
                    width="80%"
                    alt="Cancel icon"
                  />
                </StyledFormButton>
              </StyledEditButtonWrapper>
            </StyledStudentCreateForm>
          </StyledWrapper>
        </StyledModal>,
        document.body
      )
    : null;
}
