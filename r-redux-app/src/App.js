import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import ShoppingCar from './components/ShoppingCar';
import productsList from './data/productsList';

function App() {
  const [listCar,changeCar] = useState([
    // {id:1, quantity:1, name:"product 1"},
    // {id:2, quantity:3, name:"product 2"},
    // {id:3, quantity:2, name:"product 3"}
]);

  const addProductToSC = (id, name) => {
    if (listCar.length === 0 ) {
      changeCar([{id:id, name:name, quantity: 1}]);
    } else {
      const updateCar = [...listCar];
      const  isProductInCar = updateCar.filter((p)=>{ return p.id === id }).length > 0;

      if (isProductInCar) {
        updateCar.forEach((p,i)=>{
          if (p.id === id) {
            let quantity = updateCar[i].quantity;
            updateCar[i] = {id: id, name: name, quantity: quantity+1}
          }
        });
      } else {
        updateCar.push({id: id, name: name, quantity: 1});
      }
      changeCar(updateCar);
    }
  };

  return (
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
          <Route path='/shop' element={  
            <Shop productsList={productsList} addProductToSC={addProductToSC}/> 
            }></Route>
        </Routes>
      </main>
      <aside>
        <h3>Sidebar</h3>
        <ShoppingCar listCar={listCar}/>
      </aside>
    </Container>
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
