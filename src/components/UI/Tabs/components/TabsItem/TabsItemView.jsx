// Подключаем библиотеку React и хук memo
import React, { memo } from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from "classnames";
// Подключаем библиотеку валидации параметров компонента
import PropTypes from 'prop-types';

// Подключаем компонент NavLink для создания навигационных ссылок с поддержкой маршрутизации
import { NavLink } from 'react-router-dom';

// Подключаем стили элемента списка табов
import './styles/components/_tab-item.less';
import './styles/typography/_tab-item-typography.less';
import './styles/generated/_tabs-item-reset.less';

// Подключаем темы элемента списка табов
import '../../../../../styles/components/tabs-item/themes/_tab-item-theme-white.less';
//import './styles/settings/_tabs-item-theme-gray.less';
//import './styles/settings/_tabs-item-theme-dark.less';

// Подключаем иконки из библиотеки Bootstrap
import { Table, TextParagraph } from 'react-bootstrap-icons';

// Компонент элемента списка табов
const TabsItemView = memo(({ activeId, handleTabItemClick, item }) => {

    // Сравниваем текущий id c активным для добавления активного класса
    const isActive = (activeId === item.id);

    const getItemTabsIcon = (routePathComponent) => {
        switch (routePathComponent) {
            case 'tree':
                return <TextParagraph />
            case 'table':
                return <Table />
        }
    }

    return (
        <li
            className={classNames(
                'nav-item',
                'tabs-item', {
                    'tabs-item--active': isActive
                }
            )}
            key={item.id}
        >
            <NavLink
                className={classNames(
                'nav-link',
                    'tabs-item__link'
                )}
                to={`${item.path}`}
                onClick={(e) => handleTabItemClick(item.id)(e)}
            >
                <span className={classNames('tabs-item__text')}>
                    {item.name}
                </span>
                <span className={classNames('tabs-item__icon')}>
                    {getItemTabsIcon(item.path)}
                </span>
            </NavLink>
        </li>
    );
});



// Блок валидации параметров компонента
PropTypes.TabsItemView = {
    // Обязательное число
    activeId: PropTypes.number.isRequired,
    // Обязательная функция
    handleTabItemClick: PropTypes.func.isRequired,
    // Обязательный объект
    item: PropTypes.object.isRequired
};

export default TabsItemView;