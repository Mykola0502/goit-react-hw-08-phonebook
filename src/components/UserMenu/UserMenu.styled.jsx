import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const UserBtn = styled.button`
  padding: 0px 20px;
  display: inline;
  align-items: center;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
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
