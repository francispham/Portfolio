import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  padding: 2px 7px;
  margin: 4px 0;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  background: #c39f6d;
  border: 1px solid #333;

  &:hover {
    background: #ddbc8d;
    border: none;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`
