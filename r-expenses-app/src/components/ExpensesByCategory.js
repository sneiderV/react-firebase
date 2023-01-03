import React from 'react';
import {Helmet} from 'react-helmet';
import { Header, Title, HeaderContainer} from "./../elements/Header";

const ExpensesByCategory = () => {
    return ( 
    <>
        <Helmet>
            <title>Expenses by Category</title>
        </Helmet>
        <Header>
            <HeaderContainer>
                <Title>Expenses by Category</Title>
            </HeaderContainer>
        </Header>
    </>

     );
}
 
export default ExpensesByCategory;