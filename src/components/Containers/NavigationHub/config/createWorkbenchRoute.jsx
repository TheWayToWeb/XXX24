// Подключаем библиотеку React
import React from "react";
// Подключаем библиотеку генерации случайных ID
import { v4 } from "uuid";

// Подключаем функцию проверки принадлежности к производственной зоне
import { isProduction } from "../../../../helpers/data/validation/Production/isProduction.js";
// Подключаем функцию проверки принадлежности к зоне склада
import { isStore } from "../../../../helpers/data/validation/Store/isStore.js";

// Подключаем конфигурацию рабочих столов
import { pagesContentConfig } from "../../../../pages/config/pagesContentConfig.js";

// Подключаем контекст производства
import { ProductionContext } from "../../../../pages/context/ProductionContext/ProductionContext.js";
// Подключаем контекст склад
import { StoreContext } from "../../../../pages/context/StoreContext/StoreContext.js";

// Получаем текущий путь страницы
const currentRoute = (window.location.pathname).slice(1);

// Создаем функцию возвращающую объект маршрута производства
export const createWorkbenchRoute = (path, name, Component) => {
    // Получаем конфигурацию рабочих столов
    const config = Object.values(pagesContentConfig).find(
        (ctg) => ctg.components.includes(Component)
    );

    // Проверяем принадлежность к производственной зоне и находим тип конфигурации производство
    if (isProduction(currentRoute) && config?.type === "production") {
        return {
            id: v4(), // Уникальный идентификатор маршрута
            component: <Component Context={ProductionContext} />, // Компонент с контекстом производства
            path, // Текущий путь маршрута
            name, // Наименование маршрута
            typeChildrenContent: config.type // Тип конфигурации
        }
    }

    // Проверяем принадлежность к складской зоне и находим тип конфигурации склад
    if (isStore(currentRoute) && config?.type === "store") {
        return {
            id: v4(),
            component: <Component Context={StoreContext} />,
            path,
            name,
            typeChildrenContent: config.type
        }
    }

    // Возвращаем пустое значение, если не найдено соответствие типу производство
    return null;
};