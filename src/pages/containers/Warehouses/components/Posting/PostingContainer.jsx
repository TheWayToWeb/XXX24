// Подключаем библиотеку React
import React from 'react';

// Подключаем рабочий стол
import DesktopView from "../../../../../app/Desktop/DesktopView.jsx";
// Подключаем компонент менеджер маршрутов склада
import { StoreRouteManager } from "../StoreRouteManager/index.js";

// Подключаем провайдер данных склада
import StoreProvider from "../../../../providers/Store/StoreProvider.jsx";

// Подключаем кастомный хук для получения данных маршрута
import { useGettingRouteData } from "../../../../../hooks/index.js";
// Подключаем кастомный хук для управления отображением табов
import { useTabsVisibility } from "../../../../../hooks/index.js";

// Подключаем объект маппинга заголовка рабочего стола
import {translationTitleDesktopKey} from "./config/translationTitleDesktopKey.js";

// Блок презентационного компонента представления маршрутизатора
const PostingContainer = () => {

    // Получаем состояние и функцию изменения табов
    const { showTabs, handleShowTabs } = useTabsVisibility();
    // Получаем базовый путь
    const currentDesktopBase = useGettingRouteData();
    // Выполняем маппинг полученного пути
    const currentDesktopBaseKey = translationTitleDesktopKey[currentDesktopBase];

    return (
        <StoreProvider>
            <DesktopView
                desktopBaseKey={currentDesktopBaseKey}
                handleShowTabs={handleShowTabs}
                component={<StoreRouteManager showTabs={showTabs} />}
            />
        </StoreProvider>
    );
};

export default PostingContainer;