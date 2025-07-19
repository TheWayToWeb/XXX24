// Подключаем библиотеку React и хук useContext
import React, { useContext } from 'react';

// Подключаем презентационный компонент таблицы
import TableView from "./TableView.jsx";

// Подключаем контекст таблицы
import { TableDataContext } from "../../context/TableDataContext.js";

// Умный компонент таблицы
const TableSmart = () => {
    // Получаем данные таблицы из контекста производства
    const complexTableData = useContext(TableDataContext);

    return (
        <TableView renderTableData={complexTableData} />
    );
};

export default TableSmart;