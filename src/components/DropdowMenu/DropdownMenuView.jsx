import React, { useContext } from 'react';
/* Импортируем контекст */
import { ButtonStretchContext } from "./DropdownMenuSmart.jsx";
/* импортируем библиотеку classNames */
import classNames from "classnames";
/* импортируем стили выпадающего меню */
import './DropdownMenuStyles.less';
import DropdownMenuListSmart from "./DropdownMenuList";

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
                <DropdownMenuListSmart />
            </ul>
        </div>
    );
};

export default DropdownMenuView;
