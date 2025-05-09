import React from 'react';
import PropTypes from 'prop-types';
import './DropdownStyles.css';
import SidebarIndexView from "../Sidebar/SidebarIndexView.jsx";

const DropdownView = React.memo(({ show, onToggle }) => {
    return (
        <div className="dropdown Dropdown">
            <button
                className="btn dropdown-toggle Dropdown-Button"
                type="button"
                onClick={onToggle}
                aria-expanded={show}
            >
                <span className="Dropdown-ButtonText">Категории</span>
            </button>
            <ul
                className={`dropdown-menu Dropdown-Menu ${show ? 'Dropdown-Menu_Show' : ''}`}
            >
                {show ? <SidebarIndexView /> : null}
            </ul>
        </div>
    );
});

DropdownView.propTypes = {
    show: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default DropdownView;
