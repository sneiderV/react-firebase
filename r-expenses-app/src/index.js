import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import WebFont from 'webfontloader';
import Container from './elements/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitSesion from './components/InitSesion';
import ExpensesByCategory from './components/ExpensesByCategory';
import ExpensesList from './components/ExpensesList';
import UsersRegister from './components/UsersRegister';
import ExpensesEdit from './components/ExpenseEdit';
import { Helmet } from 'react-helmet';
import favicon from './assets/images/logo.ico';
import Background from './elements/Background';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <title>Expenses App</title>
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Container>
            <Routes>
              {/* TODO: Do private '/'*/}
              <Route path='/' element={<App />}></Route> 
              <Route path='/init' element={<InitSesion />}></Route>
              <Route path='/register' element={<UsersRegister />}></Route>
              <Route path='/categories' element={ <PrivateRoute> <ExpensesByCategory/> </PrivateRoute>}></Route>
              <Route path='/list' element={<PrivateRoute> <ExpensesList/> </PrivateRoute>}></Route>
              <Route path='/edit:id' element={<PrivateRoute> <ExpensesEdit/> </PrivateRoute>}></Route>
            </Routes>
          </Container>
        </BrowserRouter>
        <Background />
      </AuthProvider>
    </>

  );
}

ReactDOM.render(<Index />, document.getElementById('root'));