import React, {useContext} from 'react';
import {AuthContext} from "src/components/context/AuthContext";
import {Navigate } from "react-router";

const withLoginName = (Component: any) => (props: any) => {
    const {user} = useContext(AuthContext);
    return user
        ? <Component {...props}/>
        : <Navigate  to="/auth" />;
};

export default withLoginName;
