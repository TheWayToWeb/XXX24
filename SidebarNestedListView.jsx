import React from 'react';
// Импорт библиотеки classNames
import classNames from "classnames";
/* Импорт стилей иконки сложенного списка */
import './SidebarIconStyles.less';
/* Импорт стилей фрагмента выпадающего списка NestedNodeList */
import './SidebarNestedNodeListStyles.less';
// Импорт react-list
import ReactList from 'react-list';

// Блок описания компонента вложенного списка
const SidebarNestedListView = ({
   canStretch,
   iconMapping,
   items,
   activeIndex,
   handleActiveClick,
   fixedMenuHeight
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
                        }
                    )}
                    onClick={() => handleActiveClick(item)}
                >
                    <a className="nav-link Sidebar-Link">
                        {iconMapping[item.id]}
                        {canStretch && (
                            <span className="Sidebar-Text">{item.text}</span>
                        )}
                    </a>
                    <div
                        className={classNames(
                            'd-none',
                            'SidebarNestedNodeListContainer',
                            {
                                'd-block': activeIndex === item.id
                            }
                        )}
                        style={{ overflow: 'auto', maxHeight: `${fixedMenuHeight}px`}}
                    >
                        {/* Проверка наличия детей */}
                        {item.children && item.children.length > 0 && (
                            <ReactList
                                itemRenderer={(index) => {
                                    const child = item.children[index];
                                    return (
                                        <li
                                            className={classNames(
                                                'list-group-item',
                                                'SidebarNestedNodeList-Item'
                                            )}
                                            key={child.id}
                                        >
                                            {child.text}
                                        </li>
                                    );
                                }}
                                length={item.children.length}
                                type='uniform'
                            />
                        )}
                    </div>
                </li>
            ))}
        </>
    );
};

export default SidebarNestedListView;