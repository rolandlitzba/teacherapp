import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import uid from 'uid';
import {
  StyledModal,
  StyledWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButtonWrapper,
  StyledButton
} from './ClassesStyles';

export default function CreateNewClass({
  history,
  onClassCreate,
  isShowing,
  hide
}) {
  const [newClass, setNewClass] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    onClassCreate({
      classname: newClass,
      classId: uid()
    });
    history.replace('/classes');
    hide();
  }

  return isShowing
    ? ReactDOM.createPortal(
        <StyledModal>
          <StyledWrapper>
            <StyledForm history={history} hide={hide} onSubmit={onFormSubmit}>
              <StyledLabel>
                Classname:
                <StyledInput
                  name="class"
                  value={newClass}
                  onChange={e => setNewClass(e.target.value)}
                  placeholder="Insert new class here"
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
                <StyledButton onClick={hide}>
                  <img
                    src={process.env.PUBLIC_URL + '/assets/Cancel.svg'}
                    width="80%"
                    alt="Cancel icon"
                  />
                </StyledButton>
              </StyledButtonWrapper>
            </StyledForm>
          </StyledWrapper>
        </StyledModal>,
        document.body
      )
    : null;
}
