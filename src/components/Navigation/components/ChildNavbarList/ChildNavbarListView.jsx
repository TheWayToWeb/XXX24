// Подключаем библиотеку React, хук useContext, memo
import React, {useContext, memo, useEffect, useCallback} from 'react';
// Подключаем библиотеку react-dom
import ReactDOM from 'react-dom';
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";
// Подключаем контекст родительского компонента меню
import { ToggleButtonStretchContext } from "../../context/toggleButtonStretchContext.js";
// Подключаем контекст навигационного меню
import { VerticalNavbarContext } from "../VerticalNavbar/context/verticalNavbarContext.js";
// Подключаем контекст основного списка
import { NavbarListContext } from "../NavbarList/context/navbarListContext.js";
// Подключение компонента Link
import { Link } from "react-router-dom";
// Для кнопки удаления добавляем галочку из react-bootstrap
import { Check2 } from "react-bootstrap-icons";
// Подключение компонента React-List
import ReactList from "react-list";
// Подключение стилей вложенного списка
import './styles/components/_child-navbar-list.less';
import './styles/elements/_child-navbar-list-typography.less';
import './styles/generic/_child-navbar-list-reset.less';
import './styles/settings/_child-navbar-list-theme.less';
// Получаем утилитарные стили
import { setScrollingStyles, addOffsetStyles } from "./style-utils/styles.js";
// Подключаем библиотеку prop types
import PropTypes from "prop-types";
// Презентационный компонент вложенного списка
const ChildNavbarListView = memo(({
    childItem, // массив элементов вложенного списка children

}) => {
    const { stretchedWidthMenu } = useContext(ToggleButtonStretchContext);
    const { listHeight, listItemActiveIndex } = useContext(VerticalNavbarContext);
    // Получаем из контекста необходимое для вложенного списка
    const { activeChildItemId, handleActiveClickChildList, removeChildListItem } = useContext(NavbarListContext);
    // Переменные для корректировки высоты вложенного списка
    const childListStartHeight = listHeight * 0.5;
    const childListEndHeight = listHeight * 0.9;
    const addScrollingStyles = setScrollingStyles(
        childListStartHeight,
        childListEndHeight,
        'auto'
    );

    const offsetStyles = addOffsetStyles(
        stretchedWidthMenu
    );
    // Получаем по id контейнер портала
    const portalRoot = document.getElementById('navbar-child-list-container');
    const childListRef = React.useRef(null);
    const [isDragging, setIsDragging] = React.useState(false);
    // Состояние для хранения текущей позиции списка
    const [position, setPosition] = React.useState(() => {
        const initialLeft = parseFloat(offsetStyles?.left) || 0;
        const initialTop = parseFloat(offsetStyles?.top) || 0;
        return { x: initialLeft, y: initialTop };
    });
    // Хранение начальных координат мыши
    const dragStartMouseCoords = React.useRef({x: 0, y: 0});
    const startElementPosition = React.useRef({ x: 0, y: 0 });

    // Обработчик начала перетаскивания
    const handleMouseDown = useCallback((e) => {
        // Проверяем нажатие левой кнопки мыши
        if (e.button !== 0) return;

        setIsDragging(true);
        // Запоминаем начальные координаты мыши
        dragStartMouseCoords.current = { x: e.clientX, y: e.clientY };

        // Запоминаем текущую позицию элемента (left/top)
        if (childListRef.current) {
            const computedStyle = window.getComputedStyle(childListRef.current);
            startElementPosition.current = {
                // Используем || '0' для безопасного парсинга
                x: parseFloat(computedStyle.left),
                y: parseFloat(computedStyle.top),
            };
        }
        // Предотвращаем стандартное поведение (например, выделение текста)
        e.preventDefault();
    }, []);

    // Глобальный обработчик движения мыши
    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;
        // Вычисляем смещение мыши относительно начала перетаскивания
        const deltaX = e.clientX - dragStartMouseCoords.current.x;
        const deltaY = e.clientY - dragStartMouseCoords.current.y;

        // Обновляем позицию списка
        setPosition({
            x: startElementPosition.current.x + deltaX,
            y: startElementPosition.current.y + deltaY,
        });
    }, [isDragging]); // Зависит от isDragging

    // Обработчик отпускания кнопки мыши (глобальный)
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    // Эффект для добавления/удаления глобальных слушателей событий
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            // Очищаем слушателей, когда перетаскивание закончено
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        // Функция очистки, которая будет вызвана при размонтировании компонента
        // или перед следующим запуском эффекта
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp]); // Зависимости эффекта

    const combinedStyles = {
        ...addScrollingStyles,
        ...offsetStyles,
        position: 'absolute', // Важно для работы left/top
        left: `${position.x + 3}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab', // Изменение курсора
        userSelect: 'none', // Предотвращает выделение текста
        zIndex: 1000, // Убедитесь, что список находится поверх
    };

    // Создаем портал для рендера в другой контейнер
    // вместо обычного рендера
    return ReactDOM.createPortal(
        <ul
            ref={childListRef}
            className={classNames(
            'ChildNavbarList',
                'd-none', {
                    'd-block': listItemActiveIndex === childItem.id,
                    'dragging': isDragging,
                })}
            style={ combinedStyles }
            onMouseDown={handleMouseDown}
        >
            {childItem.children.length > 0 && (
                <ReactList
                    itemRenderer={(index) => {
                        const child = childItem.children[index];
                        return (
                            <li
                                key={child.id}
                                className={classNames(
                                    'list-group-item',
                                    'ChildNavbarList-Item', {
                                        'ChildNavbarList-Item_active': activeChildItemId === child.id,
                                    })}
                            >
                                <Link
                                    to={child.path}
                                    className={classNames(
                                        'nav-link',
                                        'ChildNavbarList-Link'
                                    )}
                                    onClick={() => handleActiveClickChildList(child.id)}
                                >
                                    <div className={classNames(
                                        'ChildNavbarList-ButtonContainer'
                                    )}>
                                                    <span className={classNames(
                                                        'ChildNavbarList-LinkText'
                                                    )}>
                                                        {child.text}
                                                    </span>
                                        <span
                                            className={classNames(
                                                'badge',
                                                'ChildNavbarList-Button',
                                                'ChildNavbarList-Button_delete'
                                            )}
                                            onClick={() => {removeChildListItem(child.id)}}
                                        >
                                                        <Check2 />
                                                    </span>
                                    </div>
                                </Link>
                            </li>
                        );
                    }}
                    length={childItem.children.length}
                    type="uniform"
                />
            )}
        </ul>,
        portalRoot
    )
});

ChildNavbarListView.PropTypes = {
    childItem: PropTypes.object.isRequired,
}

export default ChildNavbarListView;