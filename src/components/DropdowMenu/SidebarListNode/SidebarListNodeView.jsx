import React, { useState } from 'react';
// Импортируем библиотеку classNames
import classNames from "classnames";
// Импортируем компонент ReactList для отображения вложенного списка
import ReactList from 'react-list';
// Импортируем и применяем Link вместо ссылки
import { Link } from 'react-router-dom';
// Импортируем ContainerFluid Bootstrap
import ContainerFluidView from "../../Application/ContainerFluid/ContainerFluidView.jsx";
// Импортируем иконку галочки
import { Check2 } from 'react-bootstrap-icons';
// Импортируем стили выпадающего списка
import './SidebarListNodeStyles.less';

const SidebarListNodeView = ({
                                 canStretch, // Свойство изменяющее текст кнопки и контент бокового меню
                                 stretchSideMenuWidth, // Ширина бокового меню
                                 iconMapping, // Массив иконок бокового меню
                                 isListOpen, // Указываем открыт ли выпадающий список
                                 items, // Массив элементов бокового меню
                                 activeIndex, // Активный элемент бокового меню
                                 activeItemId, // Id активного элемента выпадающего списка
                                 handleActiveClick, // Обработчик клика на активном элементе бокового меню
                                 handleActiveClickNodeList, // Обработчик клика на активном элементе выпадающего списка
                                 fixedMenuHeight, // Высота бокового меню
                             }) => {
    // Процентная часть
    const nestedListHeightPercent = 0.75;
    // Корректировка высоты выпадающего списка с помощью процентной части
    const nestedListMaxHeight = fixedMenuHeight * nestedListHeightPercent;
    // Инициализируем новый массив
    const [localItems, setLocalItems] = useState(items);
    // Функция удаления элемента массива бокового меню по его id
    const removeItem = (itemId) => {
        setLocalItems(prev => prev.filter(item => item.id !== itemId));
    };
    // Функция удаления элемента массива вложенного списка
    const removeNestedListItem = (childId) => {
      setLocalItems(prevItems =>
        prevItems.map(item => {
            // Проверяем не пуст ли родительский элемент
            // чей массив children нужно изменить
            if (item.children.length > 0) {
                // Возвращаем новый объект item, скопировав все его свойства
                // и обновляем вложенный массив children
                return {
                    ...item,
                    children: item.children.filter(child => child.id !== childId)
                };
            }
            // Если у item вложенный массив children отсутствует
            // возвращаем его без изменений
            return item;
        })
      );
    };

    return (
        <>
            {localItems.map((item, index) => (
                <li
                    key={item.id}
                    className={classNames(
                        'nav-item',
                        'Sidebar-Item', {
                        'Sidebar-Item_active': activeIndex === item.id,
                    })}
                    onClick={() => handleActiveClick(item)}
                >
                    <a className={classNames(
                        'nav-link',
                        'Sidebar-Link'
                    )}>
                        <ContainerFluidView>
                            <div className={classNames(
                                'col-sm-12',
                                'col-md-6',
                                'Sidebar-LinkTextContainer'
                            )}>
                                <span className="Sidebar-IconContainer">{iconMapping[index]}</span>
                                {canStretch && (
                                    <span className="Sidebar-LinkText">{item.text}</span>
                                )}
                            </div>
                            {canStretch && (
                                <div className={classNames(
                                    'col-sm-12',
                                    'col-md-6',
                                    'Sidebar-ItemButtonContainer'
                                )}>
                                  <span
                                      className={classNames(
                                          'badge',
                                          'Sidebar-ButtonItem',
                                          'Sidebar-ButtonItem_delete'
                                      )}
                                      onClick={(e) => {
                                          e.stopPropagation();
                                          removeItem(item.id);
                                      }}
                                  >
                                    <Check2 />
                                  </span>
                                </div>
                            )}
                        </ContainerFluidView>
                    </a>

                    {/* Вложенный список */}
                    <ul
                        className={classNames(
                            'SidebarListNode', {
                            'd-none': activeIndex !== item.id,
                            'd-block': activeIndex === item.id,
                        })}
                        style={{
                            overflow: 'auto',
                            minHeight: `${fixedMenuHeight * 0.5}px`,
                            maxHeight: `${nestedListMaxHeight}px`,
                            marginLeft: `${stretchSideMenuWidth}px`,
                            transition: "margin-left 0.5s ease-in-out",
                        }}
                    >
                        {isListOpen && item.children.length > 0 && (
                            <ReactList
                                itemRenderer={(index) => {
                                    const child = item.children[index];
                                    return (
                                        <li
                                            key={child.id}
                                            className={classNames(
                                                'list-group-item',
                                                'SidebarListNode-Item', {
                                                'SidebarListNode-Item_active': activeItemId === child.id,
                                            })}
                                        >
                                            <Link
                                                to={child.path}
                                                className={classNames(
                                                    'nav-link',
                                                    'SidebarListNode-Link'
                                                )}
                                                onClick={() => handleActiveClickNodeList(child.id)}
                                            >
                                                <div className={classNames(
                                                    'SidebarListNode-LinkTextContainer'
                                                )}>
                                                    <span className={classNames(
                                                        'SidebarListNode-LinkText'
                                                    )}>
                                                        {child.text}
                                                    </span>
                                                    <span
                                                        className={classNames(
                                                            'badge',
                                                                'SidebarListNode-Button',
                                                                'SidebarListNode-Button_delete'
                                                        )}
                                                        onClick={() => {removeNestedListItem(child.id)}}
                                                    >
                                                        <Check2 />
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                }}
                                length={item.children.length}
                                type="uniform"
                            />
                        )}
                    </ul>
                </li>
            ))}
        </>
    );
};

export default SidebarListNodeView;