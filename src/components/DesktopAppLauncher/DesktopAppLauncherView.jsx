// Подключаем библиотеку React
import React from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from 'classnames';
// Подключаем библиотеку валидации параметров компонента
import PropTypes from "prop-types";

// Презентационный компонент рабочей области стола
const DesktopAppLauncherView = ({ children }) => {
    return (
        <div className={classNames('desktop-app-launcher')}
        >
            { children }
        </div>
    );
};

DesktopAppLauncherView.propTypes = {
    children: PropTypes.node.isRequired
}

export default DesktopAppLauncherView;