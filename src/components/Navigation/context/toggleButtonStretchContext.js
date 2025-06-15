// Подключаем  хук useMemo, функцию createContext
import { useMemo, createContext } from 'react';
// Создаем контекст toggle button
export const ToggleButtonStretchContext = createContext(null);
// Функция для получения значения контекста в родительском компоненте
export const useToggleButtonStretchValue = (
    expanded,
    stretchVerticalNavbar,
    stretchWidth,
    showScrolling,
    handleShowScrolling,
    handleHideScrolling
) => {
    return useMemo(() => ({
        isStretched: expanded,
        changeWidthVerticalMenu: stretchVerticalNavbar,
        stretchedWidthMenu: stretchWidth,
        visibleScrolling: showScrolling,
        showScrolling: handleShowScrolling,
        hideScrolling: handleHideScrolling
    }), [
        expanded,
        stretchVerticalNavbar,
        stretchWidth,
        showScrolling,
        handleShowScrolling,
        handleHideScrolling
    ]);
};