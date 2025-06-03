import React, { useContext } from 'react';
/* Импортируем контекст */
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";
/* импортируем контекст выпадающего списка */
import {DropdownListContext} from "./DropdownMenuListSmart.jsx";
/* Импортируем стили компонента */
import './DropdownMenuListStyles.less';
import '../SidebarButtonsStyles.css';
// импортируем умный компонент
import SidebarNestedListSmart from "../SidebarNestedList";

const DropdownMenuListView = () => {
    const { stretchSideMenuWidth } = useContext(ButtonStretchContext);
    const { dropdownListItems } = useContext(DropdownListContext);

    return (
        <nav className="navbar Sidebar">
            {dropdownListItems && dropdownListItems.length > 0 &&
                (<div className="navbar-collapse Sidebar-Collapse">
                    <ul
                        className="navbar-nav Sidebar-List"
                        style={{
                            width: `${stretchSideMenuWidth}px`,
                            transition: 'width 0.5s ease'
                        }}
                    >
                        <SidebarNestedListSmart />
                    </ul>
                </div>)}
        </nav>
    );
};

export default DropdownMenuListView;