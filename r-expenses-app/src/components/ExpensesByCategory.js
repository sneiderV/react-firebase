import React from 'react';
import {Helmet} from 'react-helmet';
import BackButton from '../elements/BackButton';
import { Header, Title} from "./../elements/Header";


const ExpensesByCategory = () => {
    return ( 
    <>
        <Helmet>
            <title>Expenses by Category</title>
        </Helmet>
        <Header>
            <BackButton/>
            <Title>Expenses by Category</Title>
        </Header>
    </>
     );
}
 
export default ExpensesByCategory;