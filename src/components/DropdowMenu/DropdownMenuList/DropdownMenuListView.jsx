import React, { useContext } from 'react';
/* Импортируем контекст кнопки боковой панели */
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";
/* Импортируем контекст самой боковой панели */
import { DropdownListContext } from "./DropdownMenuListSmart.jsx";
// Импортируем умный компонент вложенного списка
import SidebarNestedListSmart from "../SidebarListNode";
/* Импортируем стили бокового меню */
import './DropdownMenuListStyles.less';
/* ___________ */
import '../SidebarButtonsStyles.css';

const DropdownMenuListView = () => {
    // Извлекаем свойство изменения ширины бокового меню
    const { stretchSideMenuWidth } = useContext(ButtonStretchContext);
    // Извлекаем массив элементов боковой панели и ее высоту
    const { sidebarListItems, fixedMenuHeight } = useContext(DropdownListContext);
    // Проверяем длину массива бокового меню
    if (sidebarListItems.length === 0) {
        return null;
    }
    // Динамические стили для изменения ширины и высоты бокового меню
    const style = {
        width: `${stretchSideMenuWidth}px`,
        height: `${fixedMenuHeight}px`,
        transition: 'width 0.5s ease'
    };

    return (
        <nav className="navbar Sidebar">
            <div className="navbar-collapse Sidebar-Collapse">
                <ul className="navbar-nav Sidebar-List" style={style}>
                    <SidebarNestedListSmart />
                </ul>
            </div>
        </nav>
    );
};

export default DropdownMenuListView;