import React from 'react';
import Helmet from 'react-helmet';
import { Header, Title, HeaderContainer} from './../elements/Header';
import Button from './../elements/Button';
import { ButtonContainer, Form, Input, } from './../elements/ElementsForms'
import { ReactComponent as RegisterSvg } from './../assets/images/registro.svg';
import styled from 'styled-components';

const Svg = styled(RegisterSvg)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem;
`;

const UsersRegister = () => {
    return ( 
    <>
        <Helmet>
            <title>User Register</title>
        </Helmet>

        <Header>
            <HeaderContainer>
                <Title>User Register</Title>
                <div>
                    <Button to="/init">Login</Button>
                </div>
            </HeaderContainer>
        </Header>
        <Form>
            <Svg/>
            <Input type='email' name='email' placeholder='Email'/>
            <Input type='password' name='password' placeholder='Password'/>
            <Input type='password' name='passwordConfir' placeholder='Confirm password'/>
            <ButtonContainer>
                <Button as='button' type='submit' primario>Create</Button>
            </ButtonContainer>
        </Form>
    </>
    );
}
 
export default UsersRegister;