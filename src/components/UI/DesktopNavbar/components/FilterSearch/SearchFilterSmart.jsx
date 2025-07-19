// Подключаем библиотеку React, подключаем хуки useState, useEffect
import React, { useState } from 'react';
// Подключаем генератор случайных ID
import { v4 } from 'uuid';

// Подключаем презентационный компонент фильтра поиска
import SearchFilterView from './SearchFilterView.jsx';

const SearchFilterSmart = () => {
    // Состояние для управления фильтром поиска
    const [isOpen, setIsOpen] = useState(false);
    // Создаем массив для получения данных фильтра поиска
    const itemsFields = [
        {
            id: v4(),
            text: "Поиск"
        },
        {
            id: v4(),
            text: "Поиск по наименованию"
        },
        {
            id: v4(),
            text: "Поиск по категории"
        },
        {
            id: v4(),
            text: "Поиск по ключевым словам"
        }
    ];

    // Функция обработки клика по полю поиска
    const handleInputSearchClick = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <SearchFilterView
            textFilter={itemsFields}
            isOpen={isOpen}
            handleInputSearchClick={handleInputSearchClick}
        />
    );
};

export default SearchFilterSmart;