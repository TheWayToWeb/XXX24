// Подключаем хук useMemo, функцию createContext
import { useMemo, createContext } from "react";
// Создаем контекст вертикального навигационного меню
export const VerticalNavbarContext = createContext(null);
// Функция для получения контекста
export const useVerticalNavbarContext = (
    items, 
    windowHeight, 
    isListOpen, 
    activeIndexItem,
    createScrolling,
    handleActiveItemClick, 
    handleShowScrolling,
    handleHideScrolling
) => {
    return useMemo(() => ({
        listItems: items, // Массив элементов боковой панели
        listHeight: windowHeight, // // По заданию высоту меню принимаем равной высоте окна браузера
        isOpenList: isListOpen, // Свойство, отвечающее за видимость вложенного списка
        listItemActiveIndex: activeIndexItem, // Индекс активного элемента боковой панели
        showScrolling: createScrolling,
        handleListItemActiveIndex: handleActiveItemClick, // Функция обработка активного элемента по клику,
        handleMouseEnterShowScrolling: handleShowScrolling,
        handleMouseLeaveHideScrolling: handleHideScrolling,
    }), [
        items,
        windowHeight,
        isListOpen,
        activeIndexItem,
        createScrolling,
        handleActiveItemClick,
        handleShowScrolling,
        handleHideScrolling
    ]);
};