// Подключаем библиотеку React
import React from 'react';
// Подключаем библиотеку генерации случайных ID
import { v4 } from "uuid";

// Подключаем конфигурацию рабочих столов
import { pagesContentConfig } from "../../../../components/DesktopNavbar/components/VerticalDropdownButtons/config/pagesContentConfig.js";

// Подключаем контекст склада
import { StoreContext } from "../../../context/StoreContext/StoreContext.js";

// Создаем функцию возвращающую объект маршрута склада
export const createStoragesWorkbenchRoute = (path, name, Component) => {
    // Получаем конфигурацию рабочих столов
    const config = Object.values(pagesContentConfig).find(
        (ctg) => ctg.components.includes(Component)
    );

    // Проверяем, какая из существующих конфигураций соответствует типу склад
    if (config && config.type === 'storages') {
        return {
            id: v4(),
            component: <Component Context={StoreContext} />,
            path,
            name,
            typeChildrenContent: config.type
        };
    }

    // Возвращаем пустое значение, если нет соответствия типу склад
    return null;
};