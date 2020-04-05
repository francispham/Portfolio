import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    padding: 5px 10px;
    margin: 10px 0;
    color: white;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 500;
    background: #C39F6D;
    box-shadow: 0 2px 10px rgba(50, 50, 73, 0.2),
        0 37.5px 75px -5px rgba(0, 0, 0, 0.1);

    &:hover {
        background: #DDBC8D;
    }
`;