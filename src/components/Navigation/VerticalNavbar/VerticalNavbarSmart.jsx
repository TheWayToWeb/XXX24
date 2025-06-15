// Подключаем библиотеку React, хуки useState, useEffect
import React, { useState, useEffect } from 'react';
// Подключаем презентационный компонент навигационного списка
import VerticalNavbarView from "./VerticalNavbarView.jsx";
// Подключаем начальный источник данных data
import { data } from "../data/data.js";
// Подключаем объект контекста навигационного списка
import { useVerticalNavbarContext } from "./context/verticalNavbarContext.js";
// Подключаем провайдер вертикального списка навигации
import VerticalNavbarProvider from "./providers/VerticalNavbarProvider.jsx";

// Описание презентационного компонента
const VerticalNavbarSmart = () => {
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
                // выполняем запрос с помощью data
                const items = await data();
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
    /* Функция обработки активного клика на элементе навигационного списка */
    const handleActiveItemClick = (item) => {
        // Извлекаем id
        const { id } = item;
        // Устанавливаем активный id
        setActiveIndexItem(id);
        // <Говорим> что при клике нужно показывать родительский список
        setIsListOpen(true);
    };

    // Создаем объект контекста основного списка
    const listNavbarContext = useVerticalNavbarContext(
        items, // Массив элементов боковой панели
        windowHeight, // Высота списка равна высоте экрана устройства
        isListOpen, // Отвечает за видимость вложенного списка
        activeIndexItem, // Индекс активного элемента боковой панели
        handleActiveItemClick, // Функция обработки активного элемента по клику в родительском списке
    );

    return (
        <VerticalNavbarProvider
            value={listNavbarContext}
        >
            <VerticalNavbarView />
        </VerticalNavbarProvider>

    );
};

export default VerticalNavbarSmart;