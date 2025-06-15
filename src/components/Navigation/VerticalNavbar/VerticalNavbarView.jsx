// Подключаем библиотеку React, хуки useState, useEffect, useContext
import React, { useState, useEffect, useContext } from 'react';
// Подключаем Spinner
import { Spinner } from "../../../shared/NotifyLoader/index.js";
// Подключаем шаблонные строки
import classNames from "classnames";
// Подключаем контекст родительского компонента
import { ToggleButtonStretchContext } from "../context/toggleButtonStretchContext.js";
// Подключаем контекст навигационного списка
import { VerticalNavbarContext } from "./context/verticalNavbarContext.js";
// Подключаем умный компонент вложенного списка
import { NavbarList } from "../NavbarList";
// Подключаем стили панели навигации
import './style/components/_vertical-navbar.less';
import './style/elements/_vertical-navbar-typography.less';
import './style/generic/_vertical-navbar-reset.less';
import './style/settings/_vertical-navbar-theme.less';
// Подключаем утилитарные стили
import { resizableWidthStyles } from "./style-utils/styles.js";
// Блок презентационного компонента VerticalNavbar
const VerticalNavbarView = () => {
    // Инициализируем состояние для показа спиннера
    const [loading, setLoading] = useState(true);
    // Сперва извлекаем свойства контекстов для работы со style
    const {
        stretchedWidthMenu, // Свойство изменения ширины бокового меню
        visibleScrolling // Скроллинг бокового меню
    } = useContext(ToggleButtonStretchContext);

    const {
        listItems, // Массив элементов списка бокового меню
        listHeight // Высота бокового меню
    } = useContext(VerticalNavbarContext);
    // Динамические стили изменения боковой навигационной панели
    const changeableWidth = resizableWidthStyles(stretchedWidthMenu);

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
                        height: `${listHeight * 0.91}px`,
                        overflowY: visibleScrolling ? 'scroll' : 'hidden',
                        overflowX: 'hidden'
                    }}
                >
                    <NavbarList />
                </div>
            </div>
        </nav>
    );
};

export default VerticalNavbarView;