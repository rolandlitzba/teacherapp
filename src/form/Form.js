import React from 'react';
import styled from 'styled-components';

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
  margin: 15px;
  padding: 10px 20px;
`;

const StyledAbsenceInput = styled.input`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  font-size: 1.2em;
  margin: 15px;
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

export default function Form({ history, handleSubmitForm, hide }) {
  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    handleSubmitForm({
      name: form.student.value,
      absence: form.absence.value
    });
    history.replace('/');
    hide();
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledLabel>
        Student name:
        <StyledNameInput name="student" placeholder="Insert Name here" />
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
        <button>Add Student</button>
      </Flex>
    </StyledForm>
  );
}
