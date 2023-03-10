import React, {useContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import styled from 'styled-components';
import Post from './components/Post';
import NotFound404 from './components/NF404';
import { ThemeCtx } from './contexts/themeContext';

const App = () => {
  const {theme} = useContext(ThemeCtx);

  return ( 
    <BrowserRouter>
      <PrincipalContainer>
        <Header/>
        <Main theme={theme}>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/blog' element={ <Blog/> } />
            <Route path='/about-me' element={ <AboutMe/> } />

            <Route path='/post/:id' element={ <Post/> } />
            
            <Route path='*' element={<NotFound404/>}/>
          </Routes>
        </Main>
      </PrincipalContainer>
    </BrowserRouter>
   );
}

const PrincipalContainer = styled.div`
  padding:40px;
  width: 90%;
  mas-width: 700px;
`;

const Main = styled.main`
  font-size: ${props => props.theme ? props.theme.fontSize+'px' : '16px'};
  text-align: ${props => props.theme ? props.theme.aling : 'center'};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.2);
`;
 
export default App;