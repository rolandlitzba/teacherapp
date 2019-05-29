import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Form from '../form/Form';

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

export default function Modal({ history, handleSubmitForm, Showing, hide }) {
  return Showing
    ? ReactDOM.createPortal(
        <StyledModal>
          <StyledWrapper>
            <Form
              handleSubmitForm={handleSubmitForm}
              history={history}
              hide={hide}
            />
            <StyledEscButton onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </StyledEscButton>
          </StyledWrapper>
        </StyledModal>,
        document.body
      )
    : null;
}
