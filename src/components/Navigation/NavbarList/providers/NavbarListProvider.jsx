// Подключаем библиотеку React, хук memo
import React, { memo } from 'react';
// Подключаем контекст основного меню
import { NavbarListContext } from "../context/navbarListContext.js";
// Функция, возвращающая провайдер для основного списка
const NavbarListProvider = memo(({ value, children }) => {
    return (
        <NavbarListContext.Provider
            value={value}
        >
            {children}
        </NavbarListContext.Provider>
    );
});

export default NavbarListProvider;