import React, { memo } from 'react';
// Импортируем компоненты React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Импортируем библиотеку classNames */
import classNames from "classnames";
// Импортируем умный компонент боковой панели
import DropdownMenuListSmart from "./DropdownMenuList";
// Импортируем источник данных для меню
import { data } from './data.js';
// Импортируем массив карты Маршрутов
import RoutesComponentsMap from '../../desktops/RoutesComponentsMap.js';
// Импортируем стили боковой панели
import './DropdownMenuStyles.less';
import ContainerFluidView from "../../shared/ContainerFluid/ContainerFluidView.jsx";
// Презентационный компонент боковой панели
const DropdownMenuView = memo(({
    canStretch,
    changeDropdownButtonWidth,
    stretchSideMenuWidth
}) => {
    return (
        <Router>
            <ContainerFluidView>
                <div className="col-sm-12 col-md-4">
                    <div className="dropdown Dropdown">
                        <button
                            className={classNames(
                                'btn',
                                'dropdown-toggle',
                                'Dropdown-Button'
                            )}
                            type="button"
                            onClick={ changeDropdownButtonWidth }
                            style={{
                                width: `${stretchSideMenuWidth}px`,
                                transition: 'width 0.5s ease'
                            }}
                        >
                            { canStretch ? (
                                <span className="Dropdown-ButtonText">Категории</span>
                            ) : null }
                        </button>
                        <div
                            className={classNames(
                                'dropdown-menu',
                                'Dropdown-Menu',
                                'Dropdown-Menu_Show'
                            )}
                        >
                            <DropdownMenuListSmart />
                        </div>
                    </div>
                </div>
                {/* Генерация маршрутов рабочих столов */}
                <div className="col-sm-12 col-md-8">
                    <Routes>
                        {data.map(item => (
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
            </ContainerFluidView>
        </Router>
    );
});

export default DropdownMenuView;
