import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

// import './NavBar.scss';

const links = [
    {
        id: 1,
        url: '/',
        title: 'Home',
        exact: true
    },
    {
        id: 2,
        url: '/favourite-movies',
        title: 'Favourite Movies'
    },
    {
        id: 3,
        title: 'Logout'
    },
    {
        id: 4,
        url: '/profile',
        title: 'Profile'
    }
];

const NavBar = ({logoutUser}) => (
    <nav className="navbar">
        <ul className="navbar__list">
            {links.map(({ id, url, title, exact }) => {
                if (!url) {
                    return (
                        <li key={id} className="navbar__list-item">
                            <span
                                className="navbar__link"
                                onClick={logoutUser}
                            >
                                {title}
                            </span>
                        </li>
                    );
                }

                return (
                    <li key={id} className="navbar__list-item">
                        <NavLink
                            to={url}
                            exact={exact}
                            className="navbar__link"
                            activeClassName="navbar__link--active"
                        >
                            {title}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
        
    </nav>
);

NavBar.propTypes = {
    logoutUser: PT.func.isRequired
};

export default NavBar;
