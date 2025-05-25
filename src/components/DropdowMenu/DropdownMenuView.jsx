import React from 'react';
import PropTypes from 'prop-types';
import './DropdownMenuStyles.less';
import DropdownMenuListIndexView from "./DropdownMenuListIndexView.jsx";

const DropdownMenuView = React.memo(({ show, onToggle }) => {
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
                {show ? <DropdownMenuListIndexView /> : null}
            </ul>
        </div>
    );
});

DropdownMenuView.propTypes = {
    show: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default DropdownMenuView;
