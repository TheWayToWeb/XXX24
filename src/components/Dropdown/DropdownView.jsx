import React from 'react';
import SidebarSmart from "../TopMenu/SidebarSmart.jsx";
import '../Dropdown/DropdownStyles.css';

const DropdownView = () => {
    return (
        <div className="dropdown Dropdown">
            <button className="btn dropdown-toggle Dropdown-Button" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu Dropdown-Menu Dropdown-Menu_Show">
                <SidebarSmart />
            </ul>
        </div>
    );
};

export default DropdownView;
