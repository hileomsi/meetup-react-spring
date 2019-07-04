import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  margin-bottom: 15px;
  border-radius: 25px;
  height: 45px;
  font-size: 12px;
  border: 0;
  background-color: transparent;
  padding: 0 1rem;
	font-family: 'Gilroy-Bold';
  color: #008BED;
  transition: color .4s, border-color .4s;
  
  :focus,:active,:hover{
    background-color: inherit;
    outline: inherit;
    color: '#0069C7';
    border-color: '#0069C7';
  }

	${props =>
    props.outline &&
    css`
      border: 2px solid #008bed;
      padding: 0 3rem;
    `}

	${props =>
    props.full &&
    css`
      width: 100%;
    `}
    
  ${props =>
    props.strong &&
    css`
      background-color: #008bed;
      color: #ffffff;
      padding: 0 3rem;
    `}
`;
