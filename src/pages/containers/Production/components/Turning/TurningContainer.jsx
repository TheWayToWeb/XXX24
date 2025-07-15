// Подключаем библиотеку React
import React from 'react';

// Подключаем шаблон рабочего стола
import { DesktopLayout } from "../../../../../app/Layout";

// Подключаем провайдер производства
import ProductionProvider from "../../../../providers/Production/ProductionProvider.jsx";

// Подключаем кастомный хук для получения данных маршрута
import { useGettingRouteData } from "../../../../../hooks/index.js";
// Подключаем кастомный хук управления отображением табов
import { useTabsVisibility } from "../../../../../hooks/index.js";

// Подключаем объект маппинга заголовка рабочего стола
import { translationTitleDesktopForKeys } from './config/desktopTitleTranslation.js';

// Блок презентационного компонента представления маршрутизатора
const TurningContainer = () => {

    // Получаем состояние и функцию его изменения
    const { showTabs, handleShowTabsClick } = useTabsVisibility();
    // Получаем базовый путь
    const currentDesktopBase = useGettingRouteData();
    // Выполняем маппинг полученного пути
    const currentDesktopBaseKey = translationTitleDesktopForKeys[currentDesktopBase]

    return (
        <ProductionProvider>
            <DesktopLayout
                showTabs={showTabs}
                handleShowTabsClick={handleShowTabsClick}
                desktopTitle={currentDesktopBaseKey}
            />
        </ProductionProvider>
    );
};

export default TurningContainer;