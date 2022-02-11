import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from 'src/components/context/AuthContext';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {StNav} from "src/components/common/NavBar/style";

const links = [
    {
        id: 1,
        url: '/',
        title: 'Home',
        exact: 'true'
    },
    {
        id: 2,
        url: '/news',
        title: 'All News'
    }
];

const NavBar = () => {
    const { setUser } = React.useContext(AuthContext);
    const { pathname } = useLocation();
    return (
        <StNav>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {links.map(({ id, url, title }) => {
                    return (
                        <Button variant={url === pathname ? "contained" : "outlined"}>
                            <NavLink key={id} to={url}>                            
                                {title}
                            </NavLink>
                        </Button>
                    );
                })}
                <Button id={'logoutButton'} variant="contained">
                    <NavLink key="logut" to="/auth" onClick={() => setUser(null)}>    
                        Log out
                    </NavLink>
                </Button>
            </ButtonGroup>
        </StNav>
    );};

export default NavBar;
