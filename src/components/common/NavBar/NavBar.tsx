import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/components/context/AuthContext';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {StNav} from "src/components/common/NavBar/style";
import LINKS from "src/constants/links";


const NavBar: React.FC = () => {
    const { setUser } = React.useContext(AuthContext);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleClickLogout = () => {
        setUser(null);
        navigate('/auth');
    };
    return (
        <StNav>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {LINKS.map(({ id, url, title }) => {
                    return (
                        <Button key={id} onClick={() => navigate(url)} variant="contained" disabled={url === pathname}>
                            {title}
                        </Button>
                    );
                })}
                <Button id={'logoutButton'} variant="contained" onClick={handleClickLogout}>Log out</Button>
            </ButtonGroup>
        </StNav>
    );
};

export default NavBar;
