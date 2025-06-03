import React, { useState, useEffect } from 'react';
// Импортируем презентационный компонент выпадающего списка
import DropdownMenuListView from "./DropdownMenuListView.jsx";
// Импортируем функцию fetchedData
import { fetchedData } from "../fetchedData.js";
// Описание презентационного компонента
const DropdownMenuListSmart = () => {
    // Инициализация состояния активного элемента списка
    const [active, setActive] = useState(null);
    // Инициализация состояния для массива sidebarItems
    const [items, setItems] = useState([]);
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

    const handleClickLink = (item) => {
        setActive(item.id); // Устанавливаем активный пункт
    };

    return (
        <DropdownMenuListView
            initItems={items}
            active={active}
            handleClickLink={handleClickLink}
        />
    );
};

export default DropdownMenuListSmart;
