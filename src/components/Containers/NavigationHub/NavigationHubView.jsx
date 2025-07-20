// Подключаем библиотеку React, хуки состояния, эффекта, кэширования
import React, { useState, useEffect, memo } from 'react';
// Подключаем валидацию параметров
import PropTypes from "prop-types";

// Подключаем компонент табов
import TabsView from "../../UI/Tabs/TabsView.jsx";

// Подключаем массив маршрутов рабочего стола производства
import { desktopRoutes } from "./config/desktopRoutes.js";

// Компонент отображения вкладок, использующий предыдущее состояние
// Он условно рендерит вкладки в зависимости от полученного состояния
const NavigationHubView = memo(({ showTabs }) => {
    // Создаем состояние для хранения наших маршрутов
    const [routes, setRoutes] = useState(null);

    // Загружаем маршруты при монтировании компонента
    useEffect(() => {
        // Проверяем корректность desktopRoutes
        if (desktopRoutes[0] && Array.isArray(desktopRoutes)) {
            setRoutes(desktopRoutes);
        }
        console.log(desktopRoutes);
    }, []);

    // Возвращаем контейнер с навигационными вкладками при активном showTabs
    return (
        <>
            {showTabs && routes && (
                <TabsView routes={routes} />
            )}
        </>
    );
});

NavigationHubView.propTypes = {
    showTabs: PropTypes.bool.isRequired
};

export default NavigationHubView;