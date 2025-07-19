// Подключаем библиотеку React, хуки useState, useContext
import React, { useState, useEffect, useContext } from 'react';
// Подключаем контекст родительского элемента
import { ToggleButtonStretchContext } from "./context/toggleButtonStretchContext.js";
// Подключаем компоненты React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Подключаем шаблонные строки
import classNames from "classnames";
import { NavbarToggleButton } from './components/NavbarToggleButtonPortal/index.js'
// Подключаем умный компонент боковой панели
import { VerticalNavbar } from "./components/VerticalNavbar/index.js";
// Подключаем источник данных для меню
import { verticalMenuDataSource } from './data/verticalMenuDataSource.js';
// Подключаем массив карты маршрутов
import RoutesComponentsMap from '../../../pages/RoutesComponentsMap.js';
// Подключаем стили боковой панели
import './styles/components/_vertical-menu.less';
import './styles/elements/_vertical-menu-typography.less';
import './styles/generic/_vertical-menu-reset.less';
import './styles/objects/_desktop-grid.less';
import './styles/settings/_vertical-menu-theme.less';
// Подключаем утилитарные стили
import { changeableWidthStyles } from './style-utils/styles.js';
// Подключаем контейнер Boostrap
import { BootstrapGrid } from "../../../shared/BootstrapGrid/index.js";
// Презентационный компонент боковой панели
const VerticalMenuView = () => {
    const { isStretched, changeWidthVerticalMenu } = useContext(ToggleButtonStretchContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
       // Функция для обновления состояния ширины окна
       const handleResize = () => {
           setWindowWidth(window.innerWidth);
       };

       // Добавляем слушатель события resize
        window.addEventListener('resize', handleResize);

        // Убираем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let stretchedWidthToggleButtonStyles;
    // Стили toggle button до растягивания
    const startWidthToggleButtonStyles = changeableWidthStyles(100);
    // Элегантно <подгоняем> ширину растягивающейся кнопки для экранов остальных устройств
    switch (true) {
        case windowWidth >= 853:
            stretchedWidthToggleButtonStyles = changeableWidthStyles(423);
            break;
        case windowWidth >= 820:
            stretchedWidthToggleButtonStyles = changeableWidthStyles(403);
            break;
        case windowWidth >= 768:
            stretchedWidthToggleButtonStyles = changeableWidthStyles(383);
            break;
        case windowWidth >= 344:
            stretchedWidthToggleButtonStyles = changeableWidthStyles(363);
            break;
    }

    return (
        <Router>
            <BootstrapGrid>
                <div className={classNames(
                    'col-md-6',
                        'col-lg-4',
                        'desktop-grid',
                )}>
                    <div className={classNames(
                        'dropdown',
                            'VerticalMenu'
                    )}>
                        <NavbarToggleButton
                            handlerChangeWidthVerticalMenuNav={changeWidthVerticalMenu}
                            startWidthToggleButtonStyles={startWidthToggleButtonStyles}
                            stretchedWidthToggleButtonStyles={stretchedWidthToggleButtonStyles}
                            isStretched={isStretched}
                        />
                        <div
                            className={classNames(
                                'dropdown-menu',
                                'VerticalMenu-ListContainer',
                            )}
                        >
                            <VerticalNavbar />
                        </div>
                    </div>
                </div>
                {/* Генерация маршрутов рабочих столов */}
                <div className={classNames(
                    'col-md-6',
                        'col-lg-8',
                        'desktop-grid',
                     )}>
                    <Routes>
                        {verticalMenuDataSource.map(item => (
                            item.children.map(child => (
                                <Route
                                    key={child.id}
                                    path={child.path}
                                    element={RoutesComponentsMap[child.routeComponentName]}
                                >
                                </Route>
                            ))
                        ))}
                    </Routes>
                </div>
            </BootstrapGrid>
        </Router>
    );
};

export default VerticalMenuView;
