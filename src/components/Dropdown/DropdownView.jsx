import React from 'react';
import PropTypes from 'prop-types';
import SidebarSmart from "../TopMenu/SidebarSmart.jsx";
import './DropdownStyles.css';

const DropdownView = ({ show, onToggle }) => {
  return (
      <div className="dropdown Dropdown">
          <button
              className="btn dropdown-toggle Dropdown-Button"
              type="button"
              onClick={onToggle}
              aria-expanded={show}
          >
            Категории
          </button>
          <ul
              className={`dropdown-menu Dropdown-Menu ${show ? 'Dropdown-Menu_Show' : ''}`}
          >
              {show ? <SidebarSmart /> : null}
          </ul>
      </div>
  );
};

export default DropdownView;

DropdownView.propTypes = {
    show: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
};

