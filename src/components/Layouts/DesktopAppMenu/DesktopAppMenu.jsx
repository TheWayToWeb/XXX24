// Подключаем библиотеку React и хук состояния
import React, { useState } from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from 'classnames';
// Подключаем библиотеку валидации параметров компонента
import PropTypes from "prop-types";

// Подключаем стили компонента меню приложений
import './styles/components/_desktop-app-menu.less';
import './styles/elements/_desktop-app-menu-typography.less';

// Презентационный компонент меню приложений рабочего стола
const DesktopAppMenu = ({ children }) => {
    // Состояние управления активацией меню приложений
    const [active, setActive] = useState(false);

    // Обработчик управления состоянием меню приложений
    const handleActiveState = () => {
        setActive(prevState => !prevState);
    };

    return (
        <div className={classNames('desktop-app-menu__container-fluid', {
            'has-active': active
        })}>
            <div
                className={classNames('desktop-app-menu')}
                onClick={handleActiveState}
            >
                { children }
            </div>
        </div>
    );
};

DesktopAppMenu.propTypes = {
    children: PropTypes.node.isRequired
}

export default DesktopAppMenu;