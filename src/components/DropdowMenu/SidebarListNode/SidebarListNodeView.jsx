import React, { useState, useContext } from 'react';
// Импорт библиотеки classNames
import classNames from "classnames";
/* Импорт стилей фрагмента выпадающего списка NestedNodeList */
import './SidebarListNodeStyles.less';
// Импорт react-list
import ReactList from 'react-list';
import { Link } from 'react-router-dom';
// Импортируем галочку из react-bootstrap
import { Check2 } from 'react-bootstrap-icons';
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";
import ContainerFluidView from "../../Application/ContainerFluid/ContainerFluidView.jsx";

// Блок описания компонента вложенного списка
const SidebarListNodeView = ({
   canStretch,
   iconMapping,
   items,
   activeIndex,
   handleActiveClick,
   fixedMenuHeight
}) => {
    // Коэффициент процентного отношения
    const nestedListHeightPercent = 0.7;
    // Корректируем значение высоты с помощью коэффициента
    const nestedListMaxHeight = fixedMenuHeight * nestedListHeightPercent;
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
                    <a
                        className={classNames(
                        'nav-link',
                            'Sidebar-Link'
                        )}
                    >
                        <ContainerFluidView>
                            <div
                                className={classNames(
                                'col-sm-12',
                                    'col-md-6',
                                    'Sidebar-LinkTextContainer'
                                )}
                            >
                                <span className={classNames(
                                    'Sidebar-IconContainer'
                                )}>
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
                            'SidebarListNode', {
                            'd-block': activeIndex === item.id
                            }
                        )}
                        style={{
                            overflow: 'auto',
                            maxHeight: `${nestedListMaxHeight}px`,
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
                                                'SidebarListNode-Item'
                                            )}
                                            key={child.id}
                                        >
                                            <Link
                                                to={child.path}
                                                className={classNames(
                                                'nav-link',
                                                    'SidebarListNode-Link'
                                                )}
                                            >
                                                <div className={classNames(
                                                'SidebarListNode-LinkTextContainer'
                                                )}>
                                                    <span className={classNames(
                                                        'SidebarListNode-LinkText'
                                                    )}>
                                                        {child.text}
                                                    </span>
                                                    <span className={classNames(
                                                        'badge',
                                                        'SidebarListNode-Button',
                                                        'SidebarListNode-Button_delete'
                                                    )}>
                                                        <Check2 />
                                                    </span>
                                                </div>
                                            </Link>
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

export default SidebarListNodeView;