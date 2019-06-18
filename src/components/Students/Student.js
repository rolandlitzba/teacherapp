import React, { useState } from 'react';
import styled from 'styled-components';
import StudentInputGroup from './StudentInputGroup';
import StudentInfoGroup from './StudentInfoGroup';
import axios from 'axios';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const StyledCardDetails = styled.form`
  background: white;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  display: grid;
  margin: 15px;
  padding: 10px 20px;
`;

const StyledDeleteButton = styled.div`
  background: none;
  border: none;
  justify-self: right;
  margin: 10px 0;
`;

const StyledEditButton = styled.img`
  width: 85%;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  justify-self: center;
  margin: 10px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px 10px;
`;

const StyledImageWrapper = styled.div`
  display: grid;
  justify-content: left;
`;

const StyledImage = styled.img`
  border: solid 1px #e5e8ef;
  border-radius: 50%;
  width: 100px;
`;

export default function Student({
  classes,
  history,
  match,
  onStudentDelete,
  onStudentUpdate
}) {
  const selectedStudent = classes.students.find(
    student => student.id === match.params.studentId
  );
  const { img, name, absence, comments, id } = selectedStudent;
  const [image, setImage] = useState(img);
  const [isEditable, setIsEditable] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newAbsence, setNewAbsence] = useState(absence);
  const [newComments, setNewComments] = useState(comments);
  const [isDeleted, setIsDeleted] = useState(false);
  function cancelChange() {
    setIsEditable(!isEditable);
  }

  function onDeleteClick() {
    onStudentDelete(id, classes);
    const queryStrings = new URLSearchParams(window.location.search);
    const origin = queryStrings.get('origin');

    if (origin === 'student') {
      history.replace(`/students`);
    } else {
      history.replace(`/classes/${classes.classId}`);
    }
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onStudentUpdate({
      name: newName,
      absence: newAbsence,
      comments: newComments,
      img: image,
      id
    });
    setIsEditable(!isEditable);
    setIsDeleted(!isDeleted);
  }

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);
    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
    history.replace(`/classes/${classes.classId}/student/${id}`);
  }

  function onDeleteImage() {
    setIsDeleted(!isDeleted);
  }

  return isEditable ? (
    <StyledCardDetails onSubmit={onFormSubmit}>
      <StyledDeleteButton onClick={onDeleteClick}>
        <img
          src={process.env.PUBLIC_URL + '/assets/Trash.svg'}
          alt="Trash icon"
        />
      </StyledDeleteButton>
      {isDeleted ? (
        <input type="file" name="file" onChange={upload} />
      ) : (
        <StyledImageWrapper>
          <StyledImage src={img} alt="Profile" />
          <button onClick={onDeleteImage}>Löschen</button>
        </StyledImageWrapper>
      )}

      <StudentInputGroup
        label="Name:"
        name="name"
        onChange={event => setNewName(event.target.value)}
        value={newName}
      />
      <StudentInputGroup
        label="Absence:"
        name="absence"
        type="number"
        onChange={event => setNewAbsence(event.target.value)}
        value={newAbsence}
      />
      <StudentInputGroup
        label="Comments:"
        name="comments"
        onChange={event => setNewComments(event.target.value)}
        value={newComments}
      />
      <StyledButtonWrapper>
        <StyledButton>
          <img
            src={process.env.PUBLIC_URL + '/assets/Confirm.svg'}
            alt="Confirm icon"
          />
        </StyledButton>
        <StyledButton onClick={cancelChange}>
          <img
            src={process.env.PUBLIC_URL + '/assets/Cancel.svg'}
            alt="Cancel icon"
          />
        </StyledButton>
      </StyledButtonWrapper>
    </StyledCardDetails>
  ) : (
    <StyledCardDetails>
      <StyledDeleteButton onClick={onDeleteClick}>
        <img
          src={process.env.PUBLIC_URL + '/assets/Trash.svg'}
          alt="Trash icon"
        />
      </StyledDeleteButton>
      <StyledImage src={img} alt="ProfileImage" />
      <StudentInfoGroup
        label="Name:"
        name="name"
        value={name}
        alt="profile-picture"
      />
      <StudentInfoGroup label="Absence:" name="absence" value={absence} />
      <StudentInfoGroup label="Comments:" name="comments" value={comments} />
      <StyledButton onClick={() => setIsEditable(!isEditable)}>
        <StyledEditButton
          src={process.env.PUBLIC_URL + '/assets/Edit.svg'}
          alt="Edit icon"
        />
      </StyledButton>
    </StyledCardDetails>
  );
}
