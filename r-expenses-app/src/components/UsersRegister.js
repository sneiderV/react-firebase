import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Header, Title, HeaderContainer } from './../elements/Header';
import Button from './../elements/Button';
import { ButtonContainer, Form, Input, } from './../elements/ElementsForms'
import { ReactComponent as RegisterSvg } from './../assets/images/registro.svg';
import styled from 'styled-components';
import { auth } from './../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Alert from '../elements/Alerts';


const Svg = styled(RegisterSvg)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem;
`;

const UsersRegister = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPass, setVerifyPass] = useState('');
    const [alertState, changeAlertState] = useState(false);
    const [alertData, changeAlertData] = useState({});

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'verifyPass':
                setVerifyPass(e.target.value);
                break;
            default:
                break;
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
        if (email === '' || password === '' || verifyPass === '') {
            changeAlertState(true)
            changeAlertData({type: "error", message: "Fill all form please !"});
            return;
        }
        if (password !== verifyPass) {
            changeAlertState(true)
            changeAlertData({type: "error", message: "Paswords are not the same !"});
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            changeAlertState(true)
            console.log(error);
            let mensaje;
			switch(error.code){
				case 'auth/invalid-password':
					mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				break;
				case 'auth/invalid-email':
					mensaje = 'El correo electrónico no es válido.'
				break;
				default:
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				break;
			}
            changeAlertData({type: "error", message: mensaje});
        }

    }

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
            <Form onSubmit={handleSubmit}>
                <Svg />
                <Input type='email' name='email' placeholder='Email' value={email} onChange={handleChange} />
                <Input type='password' name='password' placeholder='Password' value={password} onChange={handleChange} />
                <Input type='password' name='verifyPass' placeholder='Confirm password' value={verifyPass} onChange={handleChange} />
                <ButtonContainer>
                    <Button as='button' type='submit' primario>Create</Button>
                </ButtonContainer>
            </Form>
            <Alert type={alertData.type} message={alertData.message} alertState={alertState} changeAlertState={changeAlertState} />
        </>
    );
}

export default UsersRegister;