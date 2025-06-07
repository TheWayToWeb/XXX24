import React, { useState, useEffect, useMemo, createContext } from 'react';
// Импортируем презентационный компонент выпадающего списка
import DropdownMenuListView from "./DropdownMenuListView.jsx";
// Импортируем функцию fetchedData
import { fetchedData } from "../fetchedData.js";
// создаем контекст DropdownList
// eslint-disable-next-line react-refresh/only-export-components
export const DropdownListContext = createContext(null);

// Описание презентационного компонента
const DropdownMenuListSmart = () => {
    // Инициализация состояния для массива sidebarItems
    const [items, setItems] = useState([]);
    // Инициализация состояния для получения высоту окна
    const [windowHeight, setWindowHeight] = useState(0);
    // Инициализация состояния активного элемента списка
    const [activeIndexItem, setActiveIndexItem] = useState(false);
    // Инициализация состояния для раскрытия выпадающего списка
    const [isListOpen, setIsListOpen] = useState(false);

    // Обработка получения данных по API
    useEffect(() => {
        // Инициализируем функцию для извлечения данных
        const getDropdownListItems = async () => {
          try {
              // выполняем запрос с помощью fetchedData
              const items = await fetchedData();
              // Меняем состояние items
              setItems(items);
          } catch (error) {
              // Выводим ошибку в консоль браузера
              console.error("Ошибка при получении строк выпадающего меню: ", error);
          }
        };

        // Вызываем функцию получения элементов выпадающего списка
        getDropdownListItems();
    }, []);

    // Вот тут в хуке вычисляем высоту окна
    useEffect(() => {
        // Функция для обновления высоты
        const updateHeight = () => {
            setWindowHeight(window.innerHeight);
        };
        // Устанавливаем начальную высоту при монтировании
        updateHeight();
        // Добавляем слушатель изменения размера окна
        window.addEventListener('resize', updateHeight);
        // Очистка при размонтировании компонента
        return () => {
            window.removeEventListener('resize', updateHeight)
        };
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleActiveItemClick = (item) => {
        const { id } = item;
        setActiveIndexItem(id);
        setIsListOpen(true);
    };

    // Создаем переменную контекста
    const dropdownContextValue = useMemo(
        () => ({
            sidebarListItems: items, // Массив элементов боковой панели
            fixedMenuHeight: windowHeight, // По заданию высоту меню принимаем равной высоте окна браузера
            isListOpen: isListOpen, // Свойство, отвечающее за видимость вложенного списка
            activeIndex: activeIndexItem, // Индекс активного элемента боковой панели
            handleActiveClick: handleActiveItemClick // Функция обработка активного элемента по клику
        }),
        [
            items,
            windowHeight,
            isListOpen,
            activeIndexItem,
            handleActiveItemClick
        ]
    );

    return (
        <DropdownListContext.Provider value={dropdownContextValue}>
            <DropdownMenuListView />
        </DropdownListContext.Provider>

    );
};

export default DropdownMenuListSmart;
