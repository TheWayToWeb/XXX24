// Подключаем библиотеку React, хуки useState, useMemo, memo
import React, { useState, useMemo, memo } from 'react';
// Подключаем генератор случайных ID
import { v4 } from "uuid";
// Подключаем валидацию параметров
import PropTypes from "prop-types";

// Подключаем функцию получения уникальных ключей объекта
import { getUniqueKeysFromObjectData } from "../../../helpers/object/services/getUniqueKeysfromObjectData.js";
// Подключаем функцию для получения всех значений объекта по уникальным ключам
import { getValuesByUniqueKeys } from "./config/getValuesByUniquekeys.js";

// Подключаем презентационный компонент постраничного отображения таблицы
import Pagination from './Pagination.jsx';
// Подключаем провайдер данных таблицы
import TableDataProvider from "./provider/TableDataProvider.jsx";

// Подключаем кастомный хук проверки контекста
import { useCheckContext } from "../../../hooks/index.js";

// Умный компонент постраничного отображения таблицы
const PaginationSmart = memo(({ Context }) => {

    // Сохраняем контекст производство
    const productionContext = useCheckContext(Context);
    // Кэшируем объект контекста перед его сохранением
    const memoizedProductionContext = useMemo(() => productionContext, [productionContext]);

    // Получаем уникальные ключи из всех массивов в контексте
    const uniqueKeys = getUniqueKeysFromObjectData(memoizedProductionContext);
    // Преобразуем множество полученных уникальных ключей в массив
    const uniqueKeysArray = Array.from(uniqueKeys);
    // Инициализация функции получения значений по полученным уникальным ключам
    let objectValues;
    // Проверяем наличие полученного массива уникальных ключей
    if (Array.isArray(uniqueKeysArray) && uniqueKeysArray.length > 0) {
        // Получаем массив значений контекста по имеющимся в массиве уникальным ключам
        const getValuesObjectArray = getValuesByUniqueKeys(memoizedProductionContext, uniqueKeysArray);
        // Преобразуем массив значений контекста в объект
            objectValues = {...getValuesObjectArray};
    }

    // Получаем длину массива таблицы
    const length = objectValues[uniqueKeysArray[0]].length;

    // Преобразуем объект столбцов в стандартный массив свойств и объектов данных для таблицы
    const tableData = Array.from({ length }, (_, index) => {
        const obj = {};
        uniqueKeysArray.forEach(key => {
            if (key !== 'id' && key !== 'level') {
                obj[key] = objectValues[key][index];
            }
            obj.uuid = v4();
        });
        return obj;
    });

    // Состояние для получения страницы отображения
    const [currentPage, setCurrentPage] = useState(1);
    // Количество строк на странице
    const rowsPerPage = 5;
    // Получаем количество страниц
    const totalPages = Math.ceil(tableData.length / rowsPerPage);
    // Получаем позицию последней страницы
    const indexOfLastData = currentPage * rowsPerPage;
    // Получаем позицию первой страницы
    const indexOfFirstData = indexOfLastData - rowsPerPage;
    // Видимые строки таблицы на одной странице
    const visibleData = tableData.slice(indexOfFirstData, indexOfLastData);

    // Функция обработки смены страницы
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <TableDataProvider
            uniqueKeysArray={uniqueKeysArray} // Передаем уникальные ключи объекта
            tableData={visibleData} // Передаем массив данных таблицы
        >
            {/* Вставив сюда Pagination, мы передали его как children */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </TableDataProvider>

    );
});

PaginationSmart.propTypes = {
    Context: PropTypes.object.isRequired
};

export default PaginationSmart;