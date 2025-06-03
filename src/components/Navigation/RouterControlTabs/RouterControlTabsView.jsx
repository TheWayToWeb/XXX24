import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import './RouterControlTabsStyles.less';

const RouterControlTabsView = ({ links }) => {
    const location = useLocation();

    return (
        <div className="ControlTabs">
            <div className="Tabs">
                <nav className="nav nav-pills NavigateTabs">
                    {links.map((link) => (
                        <Link
                            className={classNames(
                                'nav-link',
                                'NavigateTabs-Link',
                                { 'active': location.pathname === link.route }
                            )}
                            key={link.id}
                            id={`router_${link.id}`}
                            to={link.route}
                        />
                    ))}
                </nav>
            </div>
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