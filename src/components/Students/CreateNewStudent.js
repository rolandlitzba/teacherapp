import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import uid from 'uid';

const StyledModal = styled.div`
  background: #0000008c;
  bottom: 0;
  display: grid;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const StyledWrapper = styled.div`
  background: #fcffff;
  border-radius: 12px;
  margin: auto;
  padding: 20px;
`;

const StyledForm = styled.form`
  display: grid;
  margin: 20px;
`;

const StyledLabel = styled.label`
  color: #7ababb;
  display: grid;
  font-size: 1.2em;
`;

const StyledInput = styled.input`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  font-size: 1.2em;
  margin: 15px 0;
  padding: 10px 20px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px 10px;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  padding: 0;
`;

const StyledCancelButton = styled.div``;

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
            <StyledForm history={history} hide={hide} onSubmit={onFormSubmit}>
              <StyledLabel>
                Student:
                <StyledInput
                  name="student"
                  value={newStudent}
                  onChange={e => setNewStudent(e.target.value)}
                  placeholder="Insert new student here"
                />
              </StyledLabel>
              <StyledButtonWrapper>
                <StyledButton>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/confirm.svg'}
                    width="80%"
                    alt="Confirm icon"
                  />
                </StyledButton>
                <StyledCancelButton onClick={hide}>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/Cancel.svg'}
                    width="80%"
                    alt="Cancel icon"
                  />
                </StyledCancelButton>
              </StyledButtonWrapper>
            </StyledForm>
          </StyledWrapper>
        </StyledModal>,
        document.body
      )
    : null;
}
