import styled from "styled-components";
import { colorTheme } from "../../styles/colors";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const Label = styled.label`
  color: ${colorTheme.darkGreen80};
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${colorTheme.tealGreen};
  border-radius: 5px;
  outline: none;
  background-color: ${colorTheme.platinum};
  width: 100%;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  grid-column: span 2;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid ${colorTheme.tealGreen};
  border-radius: 5px;
  background-color: ${colorTheme.platinum};
  width: 100%;
  box-sizing: border-box;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  grid-column: span 2;
  color: ${colorTheme.tealGreen}
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${colorTheme.darkBlue};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  grid-column: span 2;
  margin-top: 20px;
  &:hover {
    background-color: ${colorTheme.tealGreen};
  }
`;



// PayForm Styles

export const FormPayContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const Labels = styled.label`
  color: ${colorTheme.darkGreen80};
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Inputs = styled.input`
  padding: 10px;
  border: 1px solid ${colorTheme.tealGreen};
  border-radius: 5px;
  outline: none;
  background-color: ${colorTheme.platinum};
  width: 100%;
  box-sizing: border-box;
`;

export const ErrorMessages = styled.span`
  color: red;
  font-size: 12px;
  grid-column: span 2;
`;

export const Selects = styled.select`
  padding: 10px;
  border: 1px solid ${colorTheme.tealGreen};
  border-radius: 5px;
  background-color: ${colorTheme.platinum};
  width: 100%;
  box-sizing: border-box;
`;

export const CheckboxContainers = styled.div`
display: flex;
justify-self: center;
width: 80%;
align-content: center;
gap: 10px;
grid-column: span 2;


  input{
    width: auto;
    margin-right: 10px;
    height: 20px;
  }
  label{
    font-size: 18px;
    font-weight: lighter;
  }

`;

export const SubmitButtons = styled.button`
  padding: 10px 20px;
  background-color: ${colorTheme.darkBlue};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  grid-column: span 2;
  margin-top: 20px;
  &:hover {
    background-color: ${colorTheme.tealGreen};
  }
`;
