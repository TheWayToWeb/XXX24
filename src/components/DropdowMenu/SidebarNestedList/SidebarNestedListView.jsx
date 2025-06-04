import React, { useState, useContext } from 'react';
// Импорт библиотеки classNames
import classNames from "classnames";
/* Импорт стилей фрагмента выпадающего списка NestedNodeList */
import './SidebarNestedNodeListStyles.less';
// Импорт react-list
import ReactList from 'react-list';
// Импортируем галочку из react-bootstrap
import { Check2 } from 'react-bootstrap-icons';
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";
import ContainerFluidView from "../../Application/ContainerFluid/ContainerFluidView.jsx";

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
    // Инициализируем состояние для удаления элемента меню
    const [newItems, setNewItems] = useState(items);
    // Функция для получения нового массива элементов с учетом удаленных
    const getNewItems = (item) => {
        const { id } = item;
        setNewItems(prevItems => prevItems.filter(item => item.id !== id ));
    };

    return (
        <>
            {newItems.map((item, index) => (
                <li
                    key={item.id}
                    className={classNames(
                        'nav-item',
                        'Sidebar-Item', {
                            'Sidebar-Item_active': activeIndex === item.id
                        }
                    )}
                    onClick={() => handleActiveClick(item)}
                >
                    <a className="nav-link Sidebar-Link">
                        <ContainerFluidView>
                            <div
                                className={classNames(
                                    'col-sm-12',
                                    'col-md-6',
                                    'Sidebar-LinkTextContainer'
                                )}
                            >
                                <span className="Sidebar-IconContainer">
                                    {iconMapping[index]}
                                </span>
                                {canStretch && (
                                    <span>{item.text}</span>
                                )}
                            </div>
                            <div
                                className={classNames(
                                    'col-sm-12',
                                    'col-md-6',
                                    'Sidebar-ItemButtonContainer'
                                )}
                            >
                                {canStretch && (
                                    <span
                                        className={classNames(
                                            'badge',
                                            'Sidebar-ButtonItem',
                                            'Sidebar-ButtonItem_delete'
                                        )}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            getNewItems(item)
                                        }}
                                    >
                                        <Check2 />
                                    </span>
                                )}
                            </div>
                        </ContainerFluidView>
                    </a>
                    <ul
                        className={classNames(
                            'd-none',
                            'SidebarNestedNodeList', {
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
                                            <span className={classNames(
                                                'badge',
                                                'SidebarNestedNodeList-ButtonItem',
                                                'SidebarNestedNodeList-ButtonItem_delete'
                                            )}>
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