import React from 'react';
import { AuthContext } from 'src/components/context/AuthContext';
import NavBar from '../NavBar/NavBar';

const Toolbar = ({}: any) => {
    const { user } = React.useContext(AuthContext);
    const isLogged = !!user;
    return (
        <div>
            {
                isLogged
                    ? <NavBar />
                    : <h1 className="toolbar__title">Welcome to our application!</h1>
            }
        </div>
    );
};

export default Toolbar;
