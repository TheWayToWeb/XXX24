// Подключаем библиотеку React и хук useState
import React, { useState } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';

// Подключаем стили блока учетной записи со списком
import './styles/component/_account-dropdown.less';
import './styles/element/_account-dropdown-typography.less';
import './styles/generated/_account-dropdown-reset.less';

// Подключаем стили профиля пользователя
import './styles/settings/account-white/_account-white-theme.less'
//import './styles/settings/account-gray/_account-gray-theme.less';

// Подключаем стили выпадающего списка профиля пользователя
import './styles/settings/account-dropdown-white/account-dropdown-white-theme.less';
//import './styles/settings/account-dropdown-gray/_account-dropdown-gray-theme.less';
//import './styles/settings/account-dropdown-system/_account-dropdown-system-theme.less';

// Компонент учетной записи пользователя
const AccountDropdown = () => {

    // Инициализируем состояние управления открытием / закрытием списка
    const [dataToggle, setDataToggle] = useState(false);

    // Обработчик управления состоянием открытия / закрытия выпадающего списка
    // при клике на учетную запись пользователя
    const handleAccountDropdownToggle = () => {
        setDataToggle(prevState => !prevState);
    };

    return (
        <div className={classNames('dropdown', 'account-dropdown')}>
            <div className={classNames(
                'btn',
                    'btn-light',
                    'account-dropdown__toggle'
                )}
            >
                <div
                    className={classNames('account-dropdown__header')}
                    onClick={handleAccountDropdownToggle}
                >
                    <div className={classNames('account-dropdown__avatar')}></div>
                    <div className={classNames('account-dropdown__list')}>
                        <span className={classNames('account-dropdown__item', 'account-dropdown__item--user-name')}>user name</span>
                        <span className={classNames('account-dropdown__item', 'account-dropdown__item--user-position')}>user position</span>
                    </div>
                </div>
            </div>
            <ul
                className={classNames(
                    'dropdown-menu',
                    'account-dropdown-menu',
                    'account-dropdown__menu', {
                        'dropdown-menu--showed': dataToggle
                    }
                )}
            >
                <li className={classNames(
                    'account-dropdown__item-container',
                        'account-dropdown-menu__element'
                    )}
                >

                    <a className={classNames(
                        'dropdown-item',
                            'account-dropdown__item',
                            'account-dropdown-menu__link'
                        )}
                    >
                        Action
                    </a>
                </li>
                <li
                    className={classNames(
                    'account-dropdown__item-container',
                        'account-dropdown-menu__element'
                    )}
                >
                    <a className={classNames(
                        'dropdown-item',
                            'account-dropdown__item',
                            'account-dropdown-menu__link'
                        )}
                    >
                        Another action
                    </a>
                </li>
                <li className={classNames(
                    'account-dropdown__item-container',
                        'account-dropdown-menu__element'
                    )}
                >
                    <a
                        className={classNames(
                            'dropdown-item',
                            'account-dropdown__item',
                            'account-dropdown-menu__link'
                        )}
                    >
                        Something else here
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AccountDropdown;