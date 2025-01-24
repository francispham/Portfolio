import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px 0;
  color: white;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  background: #c39f6d;

  &:hover {
    background: #ddbc8d;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`
