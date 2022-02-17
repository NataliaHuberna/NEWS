import React, {useContext} from 'react';
import {AuthContext} from "src/components/context/AuthContext";
import {Navigate } from "react-router";

const withLoginName = (Component: React.FC) => () => {
    const {user} = useContext(AuthContext);
    return user
        ? <Component/>
        : <Navigate  to="/auth" />;
};

export default withLoginName;
