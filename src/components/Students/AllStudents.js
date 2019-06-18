import React from 'react';
import {
  StyledAllStudentsSection,
  StyledHeader,
  StyledItem,
  StyledClassWrapper,
  StyledSmallImage,
  StyledAllStudentsWrapper
} from './StudentsStyles';

export default function AllStudents({ classes }) {
  return (
    <StyledAllStudentsSection>
      {classes.map(classItem => {
        return (
          <StyledClassWrapper key={classItem.classId}>
            <StyledHeader>{classItem.classname}</StyledHeader>
            {classItem.students.map(student => (
              <StyledAllStudentsWrapper
                key={student.id}
                to={`/classes/${classItem.classId}/student/${
                  student.id
                }?origin=student`}
              >
                <StyledSmallImage src={student.img} alt="Profile" />
                <StyledItem>{student.name}</StyledItem>
              </StyledAllStudentsWrapper>
            ))}
          </StyledClassWrapper>
        );
      })}
    </StyledAllStudentsSection>
  );
}
