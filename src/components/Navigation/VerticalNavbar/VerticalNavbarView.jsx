// Подключаем библиотеку React, хуки useState, useEffect, useContext
import React, { useState, useEffect, useContext } from 'react';
// Подключаем Spinner
import { Spinner } from "../../../shared/NotifyLoader/index.js";
// Подключаем шаблонные строки
import classNames from "classnames";
// Подключаем контекст родительского компонента
import { ToggleButtonStretchContext } from "../toggleButtonStretchContext.js";
// Подключаем контекст навигационного списка
import { VerticalNavbarContext } from "./verticalNavbarContext.js";
// Подключаем умный компонент вложенного списка
import { NavbarList } from "../NavbarList";
// Подключаем стили списка навигации
import './VerticalNavbarStyles.less';
// Подключаем утилитарные стили
import { resizableWidthStyles } from "./style-utils/styles.js";

const VerticalNavbarView = () => {
    // Инициализируем состояние для показа спиннера
    const [loading, setLoading] = useState(true);
    // Сперва извлекаем свойства контекстов для работы со style
    // Извлекаем свойство отвечающее за изменение ширины бокового меню
    const { stretchedWidthMenu } = useContext(ToggleButtonStretchContext);
    // Извлекаем высоту контейнера вертикального списка
    const { listHeight } = useContext(VerticalNavbarContext);
    // Динамические стили изменения боковой навигационной панели
    const changeableWidth = resizableWidthStyles(stretchedWidthMenu);
    const {
        listItems, // элементы вертикального списка
        showScrolling, // свойство отвечающее за показ прокрутки при наведении
        handleMouseEnterShowScrolling, // функция обработки вхождения мыши в область списка
        handleMouseLeaveHideScrolling, // Функция обрабатывает уъод мыши с области списка
    } = useContext(VerticalNavbarContext);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [])

    // Если данные загружаются, то показываем спиннер
    if (loading) {
        return <Spinner />;
    }
    // Если список пуст после загрузки, то все равно показываем спиннер
    if (listItems.length === 0) {
        return <Spinner />;
    }

    return (
        <nav
            className={classNames(
            'navbar',
                'VerticalNavbar'
            )}
        >
            <div
                className={classNames(
                'navbar-collapse',
                    'VerticalNavbar-Dropdown'
                )}
                style={{
                    height: `${listHeight}px`
                }}
            >
                <div
                    className={classNames(
                    'navbar-nav',
                        'VerticalNavbar-List'
                    )}
                    style={{
                        ...changeableWidth,
                        height: `${listHeight * 0.9}px`,
                        overflowY: showScrolling ? 'scroll' : 'hidden'
                    }}
                    onMouseEnter={handleMouseEnterShowScrolling}
                    onMouseLeave={handleMouseLeaveHideScrolling}
                >
                    <NavbarList />
                </div>
            </div>
        </nav>
    );
};

export default VerticalNavbarView;