// Подключаем библиотеку React, хук кэширования
import React, { memo } from 'react';
// Подключаем валидацию параметров
import PropTypes from "prop-types";

// Подключаем компонент табов
import TabsView from "../../UI/Tabs/TabsView.jsx";

// Подключаем массив маршрутов рабочего стола производства
import { desktopRoutes } from "./config/desktopRoutes.js";

// Компонент отображения вкладок, использующий предыдущее состояние
// Он условно рендерит вкладки в зависимости от полученного состояния
const NavigationHubView = memo(({ showTabs }) => {
    // Возвращаем контейнер с навигационными вкладками при активном showTabs
    return (
        <>
            {showTabs && (
                <TabsView routes={desktopRoutes} />
            )}
        </>
    );
});

NavigationHubView.propTypes = {
    showTabs: PropTypes.bool.isRequired
};

export default NavigationHubView;