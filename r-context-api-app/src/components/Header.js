import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return ( 
        <HeaderContainer>
            <Tittle>Blog </Tittle>
            <Nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/about-me'>About me</NavLink>
            </Nav>
      </HeaderContainer>
     );
}
const HeaderContainer = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;

const Tittle = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;

const Nav = styled.nav`
    a {
        text-decoration:  none;
        color: #165168;
        margin: 0 10px;
    }
    a:hover {
        color:19168;
    }
    a.active {
        border-bottom: 2px solid #165168; 
        padding-bottom: 3px
    }
`;
export default Header;