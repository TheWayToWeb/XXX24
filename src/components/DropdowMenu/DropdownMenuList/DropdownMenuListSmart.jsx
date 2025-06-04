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
    // Инициализация состояния активного элемента списка
    const [activeIndexItem, setActiveIndexItem] = useState(false);
    // Инициализация состояния для массива sidebarItems
    const [items, setItems] = useState([]);
    // Инициализация состояния для получения высоту окна
    const [windowHeight, setWindowHeight] = useState(0);
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

    // Вызываем useEffect хук
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleActiveItemClick = (item) => {
        const { id } = item;
        setActiveIndexItem(id);
    };

    // Создаем переменную контекста
    const dropdownContextValue = useMemo(() => ({
        dropdownListItems: items,
        activeIndex: activeIndexItem,
        handleActiveClick: handleActiveItemClick,
        fixedMenuHeight: windowHeight
    }), [items, activeIndexItem, handleActiveItemClick, windowHeight]);

    return (
        <DropdownListContext value={dropdownContextValue}>
            <DropdownMenuListView />
        </DropdownListContext>

    );
};

export default DropdownMenuListSmart;
