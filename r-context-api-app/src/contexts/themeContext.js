import React, {useState} from 'react';

//creating a new context, its equals to a global status
const ThemeCtx = React.createContext();

const ThemeProvider = ({children}) => {
    
    const [theme, changeTheme] = useState({
        aling: 'center',
        fontSize: 20
    });

    const increaseFont = () => changeTheme({...theme,fontSize:theme.fontSize+2});
    const decreaseFont = () => changeTheme({...theme,fontSize:theme.fontSize-2});
    const leftAling = () => changeTheme({...theme,aling:'left'});
    const centerAling = () => changeTheme({...theme,aling:'center'});
    const rigthAling = () => changeTheme({...theme,aling:'right'});

    return (
        <ThemeCtx.Provider value={{theme, increaseFont, decreaseFont, leftAling, centerAling, rigthAling}}>
            {children}
        </ThemeCtx.Provider>
    );
}
 
export {ThemeCtx, ThemeProvider};