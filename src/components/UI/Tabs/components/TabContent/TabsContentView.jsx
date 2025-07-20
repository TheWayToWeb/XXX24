// Подключаем библиотеку React и хук memo
import React, { memo } from 'react';
// Подключаем библиотеку валидации параметров
import PropTypes from "prop-types";
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Компонент отображения содержимого вкладок
const TabsContentView = memo(({ activeId, routes }) => {

    // рендерим содержимое табов
    return (
        <div
            className={classNames('tabs-content')}
            style={{ display: activeId ? 'block' : 'none' }}
        >
            {routes && routes.length > 0 &&
                activeId &&
                routes.find(route => route.id === activeId)?.component
            }
        </div>
    );
});

TabsContentView.propTypes = {
    activeId: PropTypes.number.isRequired,
    routes: PropTypes.array.isRequired
};

export default TabsContentView;