// Подключаем библиотеку React
import React from 'react';
// Подключаем валидацию параметров
import PropTypes from "prop-types";

// Подключаем компонент табов
import TabsView from "../../../../../components/Tabs/TabsView.jsx";

// Подключаем массив маршрутов рабочего стола склада
import { storagesDesktopsRoutes } from "../../config/storagesDesktopRoutes.js";

// Подключаем компонент менеджера маршрутов производства
const StoreRouteManager = ({ showTabs }) => {
    // Отображаем табы
    return (
        <>
            {showTabs && (
                <TabsView routes={storagesDesktopsRoutes} />
            )}
        </>
    );
};

StoreRouteManager.propTypes = {
    showTabs: PropTypes.bool.isRequired
};

export default StoreRouteManager;