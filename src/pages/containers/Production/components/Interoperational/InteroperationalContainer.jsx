// Подключаем библиотеку React и хук useState
import React, { useState } from 'react';

// Подключаем компонент шаблона рабочего стола
import { DesktopLayout } from "../../../../../app/Layout";

// Подключаем провайдер данных производства
import ProductionProvider from "../../../../providers/Production/ProductionProvider.jsx";

// Подключаем кастомный хук для получения данных маршрута
import { useGettingRouteData } from "../../../../../hooks/index.js";

// Подключаем объект маппинга заголовка рабочего стола
import { translationTitleDesktopForKeys } from './config/transitionTitleDesktopForKeys.js';

// Блок презентационного компонента представления маршрутизатора
const InteroperationalContainer = () => {

    // Инициализируем состояние управления отображением табов
    const [showTabs, setShowTabs] = useState(false);
    // Создаем функцию управления отображением табов
    const handleShowTabsClick = () => {
        setShowTabs(prevState => !prevState);
    };

    // Получаем базовый путь
    const currentDesktopBase = useGettingRouteData();
    //  С помощью созданного объекта маппим заголовок
    const currentDesktopBaseKey = translationTitleDesktopForKeys[currentDesktopBase];

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

export default InteroperationalContainer;