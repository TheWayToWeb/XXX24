import React from 'react';
import './SidebarStyles.css';

const SidebarView = ({ initItems, active, handleClickLink }) => {
    return (
        <nav className="navbar navbar-light bg-light Sidebar">
                {initItems.length > 0 ? (
                    <div className="navbar-collapse Sidebar-Collapse">
                        <ul className="navbar-nav Sidebar-List">
                            {initItems.map((item) => (
                                <li
                                    className={`nav-item Sidebar-Item ${active === item.id ? 'Sidebar-Item_Active' : ''}`}
                                    key={item.id}
                                    onClick={() => handleClickLink(item)}
                                >
                                    <a className="nav-link Sidebar-Link">
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
        </nav>
    );
};

export default SidebarView;