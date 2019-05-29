import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import uid from 'uid';

const StyledModal = styled.div`
  background: #0000006b;
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

const StyledEscButton = styled.button`
  font-size: 2.5em;
`;

const StyledForm = styled.form`
  display: grid;
  margin: 20px;
`;

const StyledNameInput = styled.input`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  font-size: 1.2em;
  margin: 15px 0;
  padding: 10px 20px;
`;

const StyledAbsenceInput = styled.input`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  font-size: 1.2em;
  margin: 15px 0;
  padding: 10px 20px;
`;

const StyledLabel = styled.label`
  color: #7ababb;
  display: grid;
  font-size: 1.2em;
`;

const Flex = styled.div`
  justify-self: center;
`;

export default function Modal({ history, handleSubmitForm, Showing, hide }) {
  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    handleSubmitForm({
      name: form.student.value,
      absence: form.absence.value,
      id: uid()
    });
    history.replace('/');
    hide();
  }

  return Showing
    ? ReactDOM.createPortal(
        <StyledModal>
          <StyledWrapper>
            <StyledForm
              handleSubmitForm={handleSubmitForm}
              history={history}
              hide={hide}
              onSubmit={onFormSubmit}
            >
              <StyledLabel>
                Student name:
                <StyledNameInput
                  name="student"
                  placeholder="Insert Name here"
                />
              </StyledLabel>
              <StyledLabel>
                Absence:
                <StyledAbsenceInput
                  name="absence"
                  placeholder="0"
                  type="number"
                  defaultValue="0"
                />
              </StyledLabel>
              <Flex>
                <button>Confirm</button>
              </Flex>
            </StyledForm>
            <StyledEscButton onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </StyledEscButton>
          </StyledWrapper>
        </StyledModal>,
        document.body
      )
    : null;
}
