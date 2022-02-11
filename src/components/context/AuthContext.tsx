import React, { useState } from 'react';

type TProps = {
    children: React.ReactNode
};

export const AuthContext = React.createContext(null);

const AuthProvider: React.FC<TProps> = ({ children}) => {
    const [user, setUser] = useState(null);
    const value = {
        user,
        setUser
    };
    
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
