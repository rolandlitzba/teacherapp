import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled.button`
  background: none;
  border: none;
  justify-self: center;
  margin: 10px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px 10px;
`;

export const StyledCardDetails = styled.form`
  background: white;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  display: grid;
  margin: 15px;
  padding: 10px 20px;
`;

export const StyledDeleteButton = styled.div`
  background: none;
  border: none;
  justify-self: right;
  margin: 10px 0;
`;

export const StyledEditButton = styled.img`
  background: none;
  border: none;
  bottom: 7.5%;
  padding: 0;
  position: absolute;
  right: 3%;
`;

export const StyledImage = styled.img`
  border: solid 1px #e5e8ef;
  border-radius: 50%;
  width: 100px;
`;

export const StyledImageWrapper = styled.div`
  display: grid;
  justify-content: left;
`;

export const StyledModal = styled.div`
  background: #0000008c;
  bottom: 0;
  display: grid;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const StyledWrapper = styled.div`
  background: #fcffff;
  border-radius: 12px;
  margin: auto;
  padding: 20px;
`;

export const StyledStudentCreateForm = styled.form`
  display: grid;
  margin: 20px;
`;

export const StyledLabel = styled.label`
  color: #7ababb;
  display: grid;
  font-size: 1.2em;
`;

export const StyledInput = styled.input`
  background: #fcffff;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  font-size: 1.2em;
  margin: 15px 0;
  padding: 10px 20px;
`;

export const StyledEditButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px 10px;
`;

export const StyledFormButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

export const StyledAllStudentsSection = styled.section`
  display: grid;
  padding: 20px;
`;

export const StyledHeader = styled.h2`
  color: #7ababb;
  font-size: 1.7em;
  font-weight: bold;
`;

export const StyledItem = styled.div``;

export const StyledClassWrapper = styled.section`
  display: grid;
  flex-direction: column;
  margin: 15px;
  text-decoration: none;
`;

export const StyledSmallImage = styled.img`
  border: solid 1px #e5e8ef;
  border-radius: 50%;
  width: 60px;
`;

export const StyledAllStudentsWrapper = styled(Link)`
  align-items: center;
  background: white;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  color: #818988;
  display: grid;
  grid-template-columns: 25% auto;
  margin: 0 0 20px;
  padding: 20px;
  text-decoration: none;
  &:visited {
    color: #818988;
    text-decoration: none;
  }
`;

export const StyledStudentInfoLabel = styled.label`
  display: grid;
  font-size: 1.2em;
  margin: 30px 0 0;
`;

export const StyledStudentInformation = styled.p`
  color: #818988;
  margin: 0 0 30px;
`;

export const StyledStudentEditInput = styled.input`
  color: #818988;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1em;
`;
