import React from 'react';
// Импорт библиотеки classNames
import classNames from "classnames";
// Блок описания компонента вложенного списка
const SidebarNestedListView = ({
    canStretch,
    iconMapping,
    items,
    activeIndex,
    handleActiveClick
}) => {

    return (
        <>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={classNames(
                        'nav-item',
                            'Sidebar-Item', {
                            'Sidebar-Item_Active': activeIndex === item.id
                        })}
                    onClick={() => handleActiveClick(item)}
                >
                    <a className="nav-link Sidebar-Link">
                        {iconMapping[item.id]}
                        {canStretch && (
                            <span className="Sidebar-Text">{item.text}</span>
                        )}
                    </a>
                    <ul>
                        {item.children.length > 0 && (
                            item.children.map((child) => (
                                <li
                                    className="list-group-item"
                                    key={child.id}
                                >
                                    {child.text}
                                </li>
                            ))
                        )}
                    </ul>
                </li>
            ))}
        </>

    );
};

export default SidebarNestedListView;