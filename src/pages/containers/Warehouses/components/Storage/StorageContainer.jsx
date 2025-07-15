// Подключаем библиотеку React
import React from 'react';

// Подключаем рабочий стол
import DesktopView from "../../../../../app/Desktop/DesktopView.jsx";
// Подключаем компонент менеджер маршрутов склада
import { StoreRouteManager } from "../StoreRouteManager/index.js";

// Подключаем провайдер склада
import StoreProvider from "../../../../providers/Store/StoreProvider.jsx";

// Подключаем кастомный хук для получения данных маршрута
import { useGettingRouteData } from "../../../../../hooks/index.js";
// Подключаем кастомный хук для управления отображением табов
import { useTabsVisibility } from "../../../../../hooks/index.js";

// Подключаем объект маппинга заголовка рабочего стола
import {translationTitleDesktopKey} from "./config/translationTitleDesktopKey.js";

// Блок презентационного компонента рабочего стола
const StorageContainer = () => {

    // Получаем состояние и функцию изменения табов
    const { showTabs, handleShowTabsClick } = useTabsVisibility();
    // Получаем базовый путь
    const currentDesktopBase = useGettingRouteData();
    // Выполняем маппинг полученного пути
    const currentDesktopBaseKey = translationTitleDesktopKey[currentDesktopBase];

    return (
        <StoreProvider>
            <DesktopView
                desktopBaseKey={currentDesktopBaseKey}
                handleShowTabsClick={handleShowTabsClick}
                component={<StoreRouteManager showTabs={showTabs} />}
            />
        </StoreProvider>
    );
};

export default StorageContainer;