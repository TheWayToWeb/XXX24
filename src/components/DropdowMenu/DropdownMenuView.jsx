import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './DropdownMenuStyles.less';
import DropdownMenuListIndexView from "./DropdownMenuListIndexView.jsx";
import { ButtonStretchContext } from "./DropdownMenuSmart.jsx";
import classNames from "classnames";

const DropdownMenuView = () => {
    const { canStretch, changeDropdownButtonWidth, stretchSideMenuWidth } = useContext(ButtonStretchContext);
    return (
        <div className="dropdown Dropdown">
            <button
                className={classNames(
                    'btn',
                    'dropdown-toggle',
                    'Dropdown-Button'
                )}
                type="button"
                onClick={ changeDropdownButtonWidth }
                style={{
                    width: `${stretchSideMenuWidth}px`,
                    transition: 'width 0.5s ease'
                }}
            >
                { canStretch ? (
                    <span className="Dropdown-ButtonText">Категории</span>
                ) : null }
            </button>
            <ul
                className={classNames(
                    'dropdown-menu',
                    'Dropdown-Menu',
                    'Dropdown-Menu_Show'
                )}
            >
                <DropdownMenuListIndexView />
            </ul>
        </div>
    );
};

DropdownMenuView.propTypes = {
    show: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default DropdownMenuView;
