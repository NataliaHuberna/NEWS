import React from 'react';
import { AuthContext } from 'src/components/context/AuthContext';
import NavBar from '../NavBar/NavBar';
import {StDiv, StH1} from "src/components/common/Toolbar/styled";

const Toolbar = ({}: any) => {
    const { user } = React.useContext(AuthContext);
    const isLogged = !!user;
    return (
        <StDiv>
            {
                isLogged
                    ? <NavBar />
                    : <StH1 className="toolbar__title">Hello! Let's read the latest news!</StH1>
            }
        </StDiv>
    );
};

export default Toolbar;
