// Подключаем библиотеку React
import React, { useState } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';

// Подключаем хук useLocation для определения маршрута
import { useLocation } from "react-router-dom";
// Подключаем хук useMediaQuery
import { useMediaQuery } from 'react-responsive';

// Подключаем поиск верхнего навигационного меню рабочего стола
import { SearchFilter } from "./components/FilterSearch/index.js";
// Подключаем выпадающий список учетных данных пользователя
import { AccountDropdown } from "./components/AccountDropdown/index.js";
// Подключаем список управляющий отображением / сокрытием столбцов таблицы
import OverlayEditableList from "./components/Overlay/OverlayEditableList.jsx";
// Подключаем вертикальный выпадающий список кнопок верхней навигационной панели
import { VerticalDropdownButtons } from "../../forms/VerticalFormsList/index.js";
// Подключаем выпадающий список основных кнопок для взаимодействия на мобильных экранах
import { DropdownInteractiveBarResponsive } from "./components/DropdownInteractiveBar/index.js";

// Подключаем функцию идентификации сектора производства
import { isProduction } from "../../../helpers/data/validation/Production/isProduction.js";
// Подключаем функцию идентификации сектора склада
import { isStore } from "../../../helpers/data/validation/Store/isStore.js";

// Подключаем стили верхней навигационной панели
import './style/component/_desktop-navbar.less';

// Подключаем темы верхней навигационной панели
import '../../../styles/components/desktop-navbar/themes/_desktop-navbar-theme-white.less';
//import './style/settings/_desktop-navbar-theme-gray.less';
//import './style/settings/_desktop-navbar-theme-dark.less';

// Компонент навигационной панели
const DesktopNavbarView = () => {

    // Инициализируем состояние для отображения списка
    const [activeOverlayId, setActiveOverlayId] = useState(null);

    // Инициализируем состояние управления открытием /закрытием
    // выпадающего списка с кнопками
    const [dataToggle, setDataToggle] = useState(false);

    // Обработчик отображения ока
    const handleOverlayOpen = (item) => {
        setActiveOverlayId(item.id);
    }
    // Обработчик сокрытия окна
    const handleOverlayClose = () => {
        setActiveOverlayId(null);
    };

    // Обработчик управления состоянием выпадающего списка
    // верхнего меню рабочего стола
    const handleDropdownButtonsToggle = () => {
        setDataToggle(prevState => !prevState);
    };
    // Получаем объект текущего маршрута
    const location = useLocation();
    // Получаем наименование текущего маршрута
    const currentPathName = location.pathname.slice(1);

    // Функция для сокрытия иконок склада
    const isHiddenDesktopStore = (type) => ['personArmsUp', 'boundingBoxCircles', 'gear'].includes(type);
    // Функция для сокрытия иконок производства
    const isHiddenDesktopProduction = (type) => ['box', 'personAdd', 'filePlus', 'gear'].includes(type);

    // Проверяем соответствует ли ширина экрана ширине мобильного телефона
    const isMobilePhoneScreen = useMediaQuery({ query: '(max-width: 991px)' });

    return (
        <div className="desktop-navbar__container">
            <nav className={classNames(
                'navbar',
                'navbar-light',
                'navbar-top',
                'desktop-navbar'
            )}>
                <SearchFilter />
                {isMobilePhoneScreen ? (
                   <DropdownInteractiveBarResponsive>
                       <>
                           <VerticalDropdownButtons
                               dataToggle={dataToggle}
                               activeOverlayId={activeOverlayId}
                               currentPathName={currentPathName}
                               isProduction={isProduction}
                               isStore={isStore}
                               isHiddenDesktopProduction={isHiddenDesktopProduction}
                               isHiddenDesktopStore={isHiddenDesktopStore}
                               handleDropdownButtonsToggle={handleDropdownButtonsToggle}
                               handleOverlayOpen={handleOverlayOpen}
                               handleOverlayClose={handleOverlayClose}
                           />
                           <OverlayEditableList />
                       </>
                   </DropdownInteractiveBarResponsive>
                ) : (
                  <>
                      <VerticalDropdownButtons
                          dataToggle={dataToggle}
                          activeOverlayId={activeOverlayId}
                          currentPathName={currentPathName}
                          isProduction={isProduction}
                          isStore={isStore}
                          isHiddenDesktopProduction={isHiddenDesktopProduction}
                          isHiddenDesktopStore={isHiddenDesktopStore}
                          handleDropdownButtonsToggle={handleDropdownButtonsToggle}
                          handleOverlayOpen={handleOverlayOpen}
                          handleOverlayClose={handleOverlayClose}
                      />
                      <OverlayEditableList />
                  </>
                )}
                <div className={classNames('navbar-top__account-dropdown')}>
                    <AccountDropdown />
                </div>
            </nav>
        </div>
    );
}

export default DesktopNavbarView;