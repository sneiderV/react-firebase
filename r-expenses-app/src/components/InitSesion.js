import React from 'react';
import Helmet from 'react-helmet';
import { Header, Title, HeaderContainer} from './../elements/Header';
import Button from './../elements/Button';
import { ButtonContainer, Form, Input, } from './../elements/ElementsForms'
import { ReactComponent as LoginSvg } from './../assets/images/login.svg';
import styled from 'styled-components';

const Svg = styled(LoginSvg)`
    width: 100%;
    max-height: 12.25rem; /* 100px */
    margin-bottom: 1.25rem;
`;
const InitSesion = () => {
    return ( 
        <>
        <Helmet>
            <title>Login</title>
        </Helmet>

        <Header>
            <HeaderContainer>
                <Title>Login</Title>
                <div>
                    <Button to="/register">Register</Button>
                </div>
            </HeaderContainer>
        </Header>
        <Form>
            <Svg/>
            <Input type='email' name='email' placeholder='Email'/>
            <Input type='password' name='password' placeholder='Password'/>
            <ButtonContainer>
                <Button as='button' type='submit' primario>Login</Button>
            </ButtonContainer>
        </Form>
    </>
     );
}
 
export default InitSesion;