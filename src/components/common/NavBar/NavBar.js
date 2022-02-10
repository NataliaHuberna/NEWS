import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from 'src/components/context/AuthContext';

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
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {links.map(({ id, url, title, exact }) => {
                    return (
                        <li key={id} className="navbar__list-item">
                            <NavLink
                                to={url}
                                exact={exact}
                                className="navbar__link"
                            >
                                {title}
                            </NavLink>
                        </li>
                    );
                })}
                <li key="logut" className="navbar__list-item">
                    <NavLink
                        to="/auth"
                        exact={true}
                        className="navbar__link"
                        onClick={() => setUser(null)}
                    >
                        Logout
                    </NavLink>
                </li>
            </ul>
        
        </nav>
    );};

export default NavBar;
