import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCardList = styled.section`
  background: white;
  border: solid 1px #e5e8ef;
  border-radius: 12px;
  display: grid;
  flex-direction: column;
  margin: 15px;
  padding: 10px 20px;
  text-decoration: none;
`;

export const StyledHeader = styled.h2`
  color: #7ababb;
  font-size: 1.7em;
  font-weight: bold;
`;

export const StyledItem = styled.div``;

export const StyledDeleteButton = styled.div`
  background: none;
  border: none;
  justify-self: right;
  margin: 10px 0;
`;

export const StyledImage = styled.img`
  border: solid 1px #e5e8ef;
  border-radius: 50%;
  clip-path: circle(35px at center);
  width: 60px;
`;

export const StyledInfoWrapper = styled(Link)`
  align-items: center;
  color: #818988;
  display: grid;
  grid-template-columns: 25% auto;
  margin: 0 0 20px;
  text-decoration: none;
  &:visited {
    color: #818988;
    text-decoration: none;
  }
`;

export const StyledCard = styled(Link)`
  align-items: center;
  background: white;
  border: solid 1px #e5e8ef;
  box-shadow: 3px 3px 5px 4px #e5e8ef;
  border-radius: 12px;
  display: flex;
  font-size: 1.2em;
  justify-content: center;
  margin: 15px;
  min-height: 150px;
  min-width: 150px;
  padding: 10px 20px;
  text-decoration: none;
`;

export const StyledInformation = styled.p`
  color: #7ababb;
  font-size: 1.3em;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;

export const StyledClassList = styled.section`
  background: #fcffff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
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

export const StyledForm = styled.form`
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

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px 10px;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  padding: 0;
`;
