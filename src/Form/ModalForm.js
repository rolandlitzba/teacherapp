import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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
  font-size: 1.2em;
`;

export default function ModalForm({
  history,
  handleSubmitForm,
  Showing,
  hide
}) {
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
                <StyledInput name="student" placeholder="Insert Name here" />
              </StyledLabel>
              <StyledLabel>
                Absence:
                <StyledInput
                  name="absence"
                  placeholder="0"
                  type="number"
                  defaultValue="0"
                />
              </StyledLabel>
              <StyledButtonWrapper>
                <StyledButton>confirm</StyledButton>
                <StyledButton onClick={hide}>cancel</StyledButton>
              </StyledButtonWrapper>
            </StyledForm>
          </StyledWrapper>
        </StyledModal>,
        document.body
      )
    : null;
}
