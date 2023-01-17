import React from 'react';
import Helmet from 'react-helmet';
import { useAuth } from '../context/AuthContext';
import BackButton from '../elements/BackButton';
import { Header, Title } from '../elements/Header';

const ExpensesList = () => {
    const ctx = useAuth();

    return ( 
     <>
        <Helmet>
            <title>Expenses List</title>
        </Helmet>
        <Header>
            <BackButton/>
            <Title>Expenses List</Title>
        </Header>
    </>
    );
}
 
export default ExpensesList;