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
    handleActiveItemClick
) => {
    return useMemo(() => ({
        listItems: items, // Массив элементов боковой панели
        listHeight: windowHeight, // По заданию высоту меню принимаем равной высоте окна браузера
        isOpenList: isListOpen, // Свойство, отвечающее за видимость вложенного списка
        listItemActiveIndex: activeIndexItem, // Индекс активного элемента боковой панели
        handleListItemActiveIndex: handleActiveItemClick, // Функция обработка активного элемента по клику,
    }), [
        items,
        windowHeight,
        isListOpen,
        activeIndexItem,
        handleActiveItemClick
    ]);
};