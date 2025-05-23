import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './RouterControlTabsStyles.css';

const RouterControlTabsView = ({ links }) => {
    const location = useLocation();

    return (
        <div className="ControlTabs">
            <header className="Tabs">
                <nav className="nav nav-pills NavigateTabs">
                    {links.map((link) => (
                        <Link
                            className={`nav-link NavigateTabs-Link ${location.pathname === link.path ? 'NavigateTabs-Link_Active' : ''}`}
                            key={link.id}
                            id={`router_${link.id}`}
                            to={link.route}
                        />
                    ))}
                </nav>
            </header>
        </div>
    );
};

RouterControlTabsView.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default RouterControlTabsView;