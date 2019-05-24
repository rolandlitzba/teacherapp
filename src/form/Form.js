import React from 'react';
import styled from 'styled-components';
import AddButton from './FormButton';

const StyledForm = styled.form`
  display: grid;
  margin: 20px;
`;

const StyledNameInput = styled.input`
  padding: 10px 20px;
  background: #fcffff;
  border: solid 1px #e5e8ef;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  border-radius: 12px;
  margin: 15px;
  font-size: 1.2em;
`;

const StyledAbsenceInput = styled.input`
  padding: 10px 20px;
  background: #fcffff;
  border: solid 1px #e5e8ef;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  border-radius: 12px;
  margin: 15px;
  font-size: 1.2em;
`;

const StyledLabel = styled.label`
  color: #7ababb;
  display: grid;
  font-size: 1.2em;
`;

const Flex = styled.div`
  justify-self: center;
`;

export default function Form({ handleSubmitForm }) {
  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    handleSubmitForm({
      name: form.student.value,
      absence: form.absence.value
    });
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
