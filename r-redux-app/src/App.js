import React from 'react';
import styled from 'styled-components';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import ShoppingCar from './components/ShoppingCar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/shopReducer';

function App() {

  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <Container>
        <Menu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path='*' element={ <NotFound/> }></Route>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/blog' element={ <Blog/> }></Route>
            <Route path='/shop' element={ <Shop/> }></Route>
          </Routes>
        </main>
        <aside>
          <h3>Sidebar</h3>
          <ShoppingCar/>
        </aside>
      </Container>
    </Provider>
  );
}

const Container = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
