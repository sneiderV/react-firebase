import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const [user, changeUser] = useState();
    const [loading, changeLoading] = useState(true);

    // hook to execute the validation one time
    useEffect( () => {
        // check if there is user
        const cancelObserver = onAuthStateChanged(auth, (user)=>{
            console.log(user);
            changeUser(user);
            changeLoading(false);
        });

        return cancelObserver;
    }, []);

    return ( 
        <AuthContext.Provider value={{user: user}}>
            {!loading && children}
        </AuthContext.Provider>
     );
}

// Util Hook to obtain context
const useAuth = ()=>{
    return useContext(AuthContext)
}
 
export { AuthContext, AuthProvider, useAuth }