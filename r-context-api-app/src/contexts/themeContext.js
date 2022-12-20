import React from 'react';

//creating a new context, its equals to a global status
const ThemeCtx = React.createContext();

const ThemeProvider = ({children}) => {
    return (
        <ThemeCtx.Provider value={{someAttr:'some value'}}>
            {children}
        </ThemeCtx.Provider>
    );
}
 
export {ThemeCtx, ThemeProvider};