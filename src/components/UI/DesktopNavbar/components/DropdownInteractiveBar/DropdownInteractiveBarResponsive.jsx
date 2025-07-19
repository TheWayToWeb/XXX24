// Подключаем библиотеку React и хук состояния
import React, { useState } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';
// Подключаем библиотеку валидации параметров компонента
import PropTypes from "prop-types";

// Подключаем иконки из библиотеки bootstrap
import { ChevronDown } from "react-bootstrap-icons";

// Подключаем стили компонента
import './styles/component/_dropdown-intercative-bar.less';
import './styles/elements/_dropdown-intercative-bar-typography.less';
import './styles/generated/_dropdown-intercative-bar-reset.less';
import './styles/settings/_dropdown-intercative-bar-theme.less';

// Компонент интерактивной панели
const DropdownInteractiveBarResponsive = ({ children }) => {
    // Инициализируем состояние открытия / закрытия панели с кнопками
    const [toggleBar, setToggleBar] = useState(false);

    // Обработчик управления состоянием открытия / закрытия интерактивной панели
    const handleToggleBar = () => {
        setToggleBar(prevState => !prevState);
    };

    return (
        <div className={classNames('dropdown-interactive-bar')}>
            <div
                className={classNames(
                    'dropdown-interactive-bar__data-toggle',
                        {
                            'dropdown-interactive-bar__data-toggle--active': toggleBar
                        }
                    )}
                onClick={handleToggleBar}
            >
                <ChevronDown />
            </div>
            {toggleBar && (
                <div className={classNames('dropdown-interactive-bar__content-data')}>
                    { children }
                </div>
            )}
        </div>
    );
};

PropTypes.DropdownInteractiveBarResponsive = {
    createComponentResponsive: PropTypes.node.isRequired
};

export default DropdownInteractiveBarResponsive;