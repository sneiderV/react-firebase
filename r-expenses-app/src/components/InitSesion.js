import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Header, Title, HeaderContainer} from './../elements/Header';
import Button from './../elements/Button';
import { ButtonContainer, Form, Input } from './../elements/ElementsForms'
import { ReactComponent as LoginSvg } from './../assets/images/login.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import Alert from '../elements/Alerts';

const Svg = styled(LoginSvg)`
    width: 100%;
    max-height: 12.25rem; /* 100px */
    margin-bottom: 1.25rem;
`;
const InitSesion = () => {

    const navigate = useNavigate;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertState, changeAlertState] = useState(false);
    const [alertData, changeAlertData] = useState({});
    
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        changeAlertState(false);
        changeAlertData({});

        const expReg = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expReg.test(email)) {
            changeAlertState(true)
            changeAlertData({type: "error", message: "Use a valid email!"});
            return;
        }
        if (email === '' || password === '') {
            changeAlertState(true)
            changeAlertData({type: "error", message: "Fill all form please !"});
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            changeAlertState(true)
            console.log(error);
            let mensaje;
			switch(error.code){
				case 'auth/wrong-password':
					mensaje = 'Wrong password!'
					break;
				case 'auth/user-not-found':
					mensaje = 'User not found.'
				break;
				default:
					mensaje = 'An error occurred during login. code:' +error.code
				break;
			}
            changeAlertData({type: "error", message: mensaje});
        }

    }
    
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
        <Form onSubmit={handleSubmit}>
            <Svg/>
            <Input type='email' name='email' placeholder='Email' value={email} onChange={handleChange}/>
            <Input type='password' name='password' placeholder='Password' value={password} onChange={handleChange}/>
            <ButtonContainer>
                <Button as='button' type='submit' primario>Login</Button>
            </ButtonContainer>
        </Form>
        <Alert type={alertData.type} message={alertData.message} alertState={alertState} changeAlertState={changeAlertState} />
    </>
     );
}
 
export default InitSesion;