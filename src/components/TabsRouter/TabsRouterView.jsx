import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TabsRouterStyles.css';

const TabsRouterView = ({ links }) => {
    const location = useLocation();

    return (
        <>
            <header className="Header">
                <nav className="nav nav-pills HeaderMenu">
                    {links.map((link) => (
                        <Link
                            className={`nav-link HeaderMenu-Link ${location.pathname === link.path ? 'active' : ''}`}
                            key={link.id}
                            id={`link-${link.id}`}
                            to={link.path}
                        />
                    ))}
                </nav>
            </header>
        </>
    );
};

TabsRouterView.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TabsRouterView;