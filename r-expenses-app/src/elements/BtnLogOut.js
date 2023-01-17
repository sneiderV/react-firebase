import React from 'react';
import Button from './Button';
import { ReactComponent as LogoutIcon } from './../assets/images/log-out.svg';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const BtnLogOut = () => {

    const navigate = useNavigate();

    const logoutSession = async () => {
        try {
            await signOut(auth);
            navigate('/init');
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <Button iconoGrande as="button" onClick={logoutSession}>
            <LogoutIcon/>
        </Button>
     );
}
 
export default BtnLogOut ;