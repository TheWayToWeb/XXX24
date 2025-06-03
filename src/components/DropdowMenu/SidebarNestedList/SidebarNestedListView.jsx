import React from 'react';

const SidebarNestedListView = ({ canStretch, icon, text }) => {
    return (
        <>
            <a className="nav-link Sidebar-Link">
                {icon}
                {canStretch && (
                    <span className="Sidebar-Text">{text}</span>
                )}
            </a>
            <ul>
                {/* В этом месте будет выпадающий список */}
            </ul>
        </>
    );
};

export default SidebarNestedListView;