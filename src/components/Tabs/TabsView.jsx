// Подключаем библиотеку React, хук состояния, хук кеширования
import React, { useState, memo } from 'react';
// Подключаем библиотеку валидации параметров
import PropTypes from "prop-types";
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Подключаем окно отображения содержимого табов
import { Lightbox } from "./components/Lightbox/index.js";
// Подключаем компонент вкладки
import { TabsItem } from "./components/TabsItem/index.js";
// Подключаем компонент отображения содержимого вкладок
import { TabsContent } from "./components/TabContent/index.js";

// Подключаем стили табов
import './styles/components/_tabs.less';
import './styles/elements/_tabs-typography.less';
import './styles/generated/_tabs-reset.less';
import './styles/settings/_tabs-theme.less';

// Презентационный компонент списка вкладок
const Tabs = memo(({ routes }) => {
    // Инициализируем состояние добавления активного класса таба
    const [activeId, setActiveId] = useState(routes[0]?.id || null);
    // Инициализируем состояние управления модальным окном
    const [showModal, setShowModal] = useState(false);

    // Функция обработки активного клика элемента
    const handleTabItemClick = (id) => (e) => {
        // Останавливаем редирект
        e.preventDefault();
        // Устанавливаем активный ID
        setActiveId(id);
        // Состояние управления открытием модального окна
        setShowModal(true);
    };

    // Функция обработки закрытия модального окна
    const handleListModalClose = () => {
        setShowModal(false);
        setActiveId(null);
    }

    return (
        <div className={classNames(
            'desktop-nav-outer',
            'nav-tabs__component',
            'navigation-wrapper',
            'navigation-wrapper__main'
        )}>
            <ul className={classNames(
                'nav',
                'nav-tabs',
                'tabs',
                'tab-list'
            )}>
                {routes.map((item => (
                    <TabsItem
                       activeId={activeId}
                       handleTabItemClick={handleTabItemClick}
                       item={item}
                    />
                )))}
            </ul>
            <Lightbox
                activeId={activeId}
                showModal={showModal}
                routes={routes}
                handleListModalClose={handleListModalClose}
            >
                <TabsContent activeId={activeId} routes={routes} />
            </Lightbox>
        </div>
    );
});

PropTypes.Tabs = {
    routes: PropTypes.object.isRequired
};

export default Tabs;