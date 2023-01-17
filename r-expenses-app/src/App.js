import React from 'react';
import {Helmet} from 'react-helmet';
import BtnLogOut from './elements/BtnLogOut';
import Button from './elements/Button';
import { Header, Title, HeaderContainer, ButtonsContainer} from "./elements/Header";

const App = () => {
    return ( 
        <>
            <Helmet>
                <title>Add expenses</title>
            </Helmet>
            <Header>
                <HeaderContainer>
                    <Title>Expenses App</Title>
                    <ButtonsContainer>
                        <Button to="/categories">Categories</Button>
                        <Button to="/list">List expenses</Button>
                        <BtnLogOut/>
                    </ButtonsContainer>
                </HeaderContainer>
            </Header>
        </>
        
     );
}
 
export default App;