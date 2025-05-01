import React from 'react';
import './TopMenuStyles.css';

const TopMenuView = ({ initItems, active, handleClickLink }) => {
    return (
        <nav className="navbar navbar-light bg-light Navbar">
            <div className="container-fluid">
                <li className="navbar-brand Navbar-Brand" to="/">
                    Navbar
                </li>
                {initItems.length > 0 ? (
                    <div className="navbar-collapse Navbar-Collapse">
                        <ul className="navbar-nav Navbar-List">
                            {initItems.map((item) => (
                                <li
                                    className={`nav-item Navbar-Item ${active === item.id ? 'Navbar-Item_active' : ''}`}
                                    key={item.id}
                                    onClick={() => handleClickLink(item)}
                                >
                                    <a className="nav-link Navbar-Link" to={item.path}>
                                        {item.innerText}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/*<DropdownSearchFiltersSmart /> */}
                    </div>
                ) : (
                    {/*<NoDataMessageView /> */}
                )}
            </div>
        </nav>
    );
};

export default TopMenuView;