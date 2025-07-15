// Подключаем библиотеку React
import React, { useState } from 'react';

// Подключаем компонент шаблона рабочего стола
import { DesktopLayout } from "../../../../../app/Layout";

// Подключаем провайдер производства
import ProductionProvider from "../../../../providers/Production/ProductionProvider.jsx";

// Подключаем кастомный хук для получения данных маршрута
import { useGettingRouteData } from "../../../../../hooks/index.js";

// Подключаем объект маппинга заголовка рабочего стола
import { translationTitleDesktopKey } from './config/translationTitleDesktopKey.js';

// Блок презентационного компонента представления маршрутизатора
const LazerContainer = () => {

    // Инициализируем состояние управления отображением табов
    const [showTabs, setShowTabs] = useState(false);
    // Создаем функцию управления отображением табов
    const handleShowTabsClick = () => {
        setShowTabs(prev => !prev);
    };

    // Получаем базовый путь
    const currentDesktopBase = useGettingRouteData();
    // Выполняем маппинг полученного пути
    const currentDesktopBaseKey = translationTitleDesktopKey[currentDesktopBase];

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

export default LazerContainer;