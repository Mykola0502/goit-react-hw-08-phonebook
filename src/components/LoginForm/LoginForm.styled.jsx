import styled from 'styled-components';

export const FormLogin = styled.form`
  margin: 50px;
  padding: 10px;
  width: 320px;
  border-radius: 5px;
  border: 2px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const FormLoginLabel = styled.label`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 18px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
  color: #0000ff;
  border: 1px solid #9ba2a8;
  font-size: 16px;

  :hover,
  :focus {
    box-shadow: 0px 1px 5px 2px #9ba2a8;
  }
`;

export const LoginBtn = styled.button`
  padding: 0px 20px;
  display: inline;
  align-items: center;
  text-align: center;
  font-family: inherit;
  font-size: 18px;
  background-color: #abe4ff;
  border: 2px solid #9ba2a8;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 250ms ease, box-shadow 250ms ease;

  :hover,
  :focus {
    background-color: #93ffa8;
    box-shadow: 0px 4px 10px 4px #9ba2a8;
  }
`;
