import React, { useContext } from 'react';
// Импорт библиотеки classNames
import classNames from "classnames";
/* Импорт стилей иконки сложенного списка */
import './SidebarIconStyles.less';
/* Импорт стилей фрагмента выпадающего списка NestedNodeList */
import './SidebarNestedNodeListStyles.less';
// Импорт react-list
import ReactList from 'react-list';
// Импортируем галочку из react-bootstrap
import { Check2 } from 'react-bootstrap-icons';
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";

// Блок описания компонента вложенного списка
const SidebarNestedListView = ({
   canStretch,
   iconMapping,
   items,
   activeIndex,
   handleActiveClick,
   fixedMenuHeight
}) => {
    /* Извлекаем ширину растягиваемого элемента */
    const { stretchSideMenuWidth } = useContext(ButtonStretchContext);

    return (
        <>
            {items.map((item, index) => (
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
                        {iconMapping[index]}
                        {canStretch && (
                            <>
                                <span className="Sidebar-Text">{item.text}</span>
                                <span className="badge">
                                    <Check2 />
                                </span>
                            </>
                        )}
                    </a>
                    <ul
                        className={classNames(
                            'd-none',
                            'SidebarNestedNodeListContainer',
                            {
                                'd-block': activeIndex === item.id
                            }
                        )}
                        style={{
                            overflow: 'auto',
                            maxHeight: `${fixedMenuHeight}px`,
                            marginLeft: `${stretchSideMenuWidth}px`,
                            transition: "margin-left 0.5s ease-in-out"
                        }}
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
                                            <span className="badge">
                                                <Check2 />
                                            </span>
                                        </li>
                                    );
                                }}
                                length={item.children.length}
                                type='uniform'
                            />
                        )}
                    </ul>
                </li>
            ))}
        </>
    );
};

export default SidebarNestedListView;