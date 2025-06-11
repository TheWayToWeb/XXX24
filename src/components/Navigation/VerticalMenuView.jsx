// Подключаем библиотеку React, хук useContext
import React, { useContext } from 'react';
// Подключаем контекст родительского элемента
import { ToggleButtonStretchContext } from "./toggleButtonStretchContext.js";
// Подключаем компоненты React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Подключаем шаблонные строки
import classNames from "classnames";
// Подключаем умный компонент боковой панели
import { VerticalNavbar } from "./VerticalNavbar";
// Подключаем источник данных для меню
import { verticalMenuDataSource } from './verticalMenuDataSource.js';
// Подключаем массив карты маршрутов
import RoutesComponentsMap from '../../desktops/RoutesComponentsMap.js';
// Подключаем стили боковой панели
import './VerticalMenuStyles.less';
// Подключаем утилитарные стили
import { changeableWidthStyles } from './style-utils/styles.js';
// Подключаем контейнер Boostrap
import { BootstrapGrid } from "../../shared/BootstrapGrid";
// Презентационный компонент боковой панели
const VerticalMenuView = () => {
    const { isStretched, changeWidthVerticalMenu, stretchedWidthMenu } = useContext(ToggleButtonStretchContext);
    const changeableWidthUtils = changeableWidthStyles(stretchedWidthMenu);
    return (
        <Router>
            <BootstrapGrid>
                <div className={classNames(
                         'col-sm-12',
                         'col-md-4'
                )}>
                    <div className={classNames(
                        'dropdown',
                            'VerticalMenu'
                    )}>
                        <button
                            className={classNames(
                                'btn',
                                'dropdown-toggle',
                                'VerticalMenu-ToggleButton'
                            )}
                            type="button"
                            onClick={changeWidthVerticalMenu}
                            style={{...changeableWidthUtils}}
                        >
                            { isStretched ? (
                                <span
                                    className={classNames(
                                      'VerticalMenu-ButtonText',
                                    )}
                                >
                                    Категории
                                </span>
                            ) : null }
                        </button>
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
                    'col-sm-12',
                         'col-md-8'
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
