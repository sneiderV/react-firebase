import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ( {children} ) => {
    const {user} = useAuth();
    if (user) {
        return children
    } else {
        return <Navigate replace to="/init"/>
    }
}
 
export default PrivateRoute;