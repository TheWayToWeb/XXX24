// Подключаем библиотеку React, хук memo
import React, { memo } from 'react';
// Подключаем контекст списка
import { VerticalNavbarContext } from "../context/verticalNavbarContext.js";
// Функция, возвращающая провайдер для навигационного меню
const VerticalNavbarProvider = memo(({ value, children }) => {
    return (
        <VerticalNavbarContext.Provider
            value={value}
        >
            {children}
        </VerticalNavbarContext.Provider>
    );
});

export default VerticalNavbarProvider;
