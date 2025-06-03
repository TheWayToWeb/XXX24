import React, { useState, useContext, memo } from 'react';
/* Импортируем контекст */
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";
/* Импортируем библиотеку classNames */
import classNames from "classnames";
/* Импортируем библиотеку PropTypes */
import PropTypes from 'prop-types';
/* Импортируем стили компонента */
import './DropdownMenuListStyles.less';
import '../SidebarButtonsStyles.css';

// Необходимо заменить все файлы c префиксом IndexView на index.js
import SidebarListItemLinkSmart from "../SidebarNestedList/index.js";

const DropdownMenuListView = memo(({ initItems }) => {
    const [activeIndexItem, setActiveIndexItem] = useState(false);
    const { stretchSideMenuWidth } = useContext(ButtonStretchContext);

    const handleActiveItemClick = (item) => {
        const { id } = item;
        setActiveIndexItem(id);
    };

    return (
        <>
            <nav className="navbar Sidebar">
                {initItems.length > 0 ? <div className="navbar-collapse Sidebar-Collapse">
                    <ul
                        className="navbar-nav Sidebar-List"
                        style={{
                            width: `${stretchSideMenuWidth}px`,
                            transition: 'width 0.5s ease'
                        }}
                    >
                        {initItems.map((item) => (
                            <li
                                key={item.id}
                                className={classNames(
                                    'nav-item',
                                    'Sidebar-Item', {
                                        'Sidebar-Item_Active': activeIndexItem === item.id
                                    })}
                                onClick={() => handleActiveItemClick(item)}
                            >
                                <SidebarListItemLinkSmart item={item} />
                            </li>
                        ))}
                    </ul>
                </div> : null}
            </nav>
        </>

    );
});

// Добавляем проверку типов пропсов с помощью PropTypes
DropdownMenuListView.propTypes = {
    initItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            innerText: PropTypes.string.isRequired,
            // Добавьте другие ожидаемые свойства объекта item
        })
    ).isRequired,
};

export default DropdownMenuListView;