import React from 'react';
import { AuthContext } from 'src/components/context/AuthContext';
import NavBar from '../NavBar/NavBar';
import {StDiv, StH1} from "src/components/common/Header/styled";

const Header: React.FC = () => {
    const { user } = React.useContext(AuthContext);
    const isLogged = !!user;
    return (
        <StDiv>
            {
                isLogged
                    ? <NavBar />
                    : <StH1>Hello! Let's read the latest news!</StH1>
            }
        </StDiv>
    );
};

export default Header;
