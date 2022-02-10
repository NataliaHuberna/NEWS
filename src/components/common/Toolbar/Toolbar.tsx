import React from 'react';
import NavBar from '../NavBar/NavBar';
// import { logoutUser } from '../../../store/actions/auth';

// import './Toolbar.scss';

const Toolbar = ({
    isAuthenticated,
    // isFetching,
    logoutUser
}:any) => {
    return (
        <div>
            <div className="toolbar__wrapper">
                {
                    isAuthenticated
                        ? <NavBar logoutUser={logoutUser} />
                        : <h1 className="toolbar__title">Welcome to our Application!</h1>
                }
            </div>
        </div>
    );
};

export default Toolbar;
