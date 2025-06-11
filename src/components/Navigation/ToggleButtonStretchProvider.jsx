// Подключаем библиотеку React, хук memo
import React, { memo } from 'react';
// Подключаем контекст родительского компонента
import { ToggleButtonStretchContext } from "./toggleButtonStretchContext.js";
// Функция возвращает провайдер контекста
const ToggleButtonStretchProvider = memo(({ value, children }) => {
    return (
        <ToggleButtonStretchContext.Provider
            value={value}
        >
            { children }
        </ToggleButtonStretchContext.Provider>
    );
});

export default ToggleButtonStretchProvider;