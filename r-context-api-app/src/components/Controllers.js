import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeCtx } from '../contexts/themeContext';

const Controllers = () => {
    const {increaseFont, decreaseFont, leftAling, centerAling, rigthAling} = useContext(ThemeCtx);
    return ( 
        <ControllersContainer>
            <div>
                <Button onClick={increaseFont}>Big font</Button>
                <Button onClick={decreaseFont}>Small font</Button>
            </div>
            <div>
                <Button onClick={leftAling}>Left</Button>
                <Button onClick={centerAling}>Center</Button>
                <Button onClick={rigthAling}>Right</Button>
            </div>
        </ControllersContainer>
     );
}

const ControllersContainer = styled.div`
    margin-top: 20px;
`;
 
const Button = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #191668;
    }
`;
 
export default Controllers;