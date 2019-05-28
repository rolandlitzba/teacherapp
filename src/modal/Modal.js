import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Form from '../form/Form';

const StyledModal = styled.div`
  display: flex;
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  height: 80vh;
  width: 95vw;
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 75px;
  left: 12px;
`;

const StyledEscButton = styled.button`
  font-size: 2.5em;
`;

export default function Modal({ history, handleSubmitForm, Showing, hide }) {
  return Showing
    ? ReactDOM.createPortal(
        <StyledModal>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header" />
              <Form
                handleSubmitForm={handleSubmitForm}
                history={history}
                hide={hide}
              />
              <StyledEscButton
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </StyledEscButton>
            </div>
          </div>
        </StyledModal>,
        document.body
      )
    : null;
}
