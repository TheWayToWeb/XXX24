// Библиотека валидации параметров компонента
import PropTypes from "prop-types";
// Подключаем контекст таблицы
import { TableDataContext } from "../context/TableDataContext.js";

// Создаем провайдер данных таблицы
const TableDataProvider = ({ children, uniqueKeysArray, tableData }) => {
// Создаем объект отображения данных таблицы
 const renderTableData = {
     renderTableColumnsData: uniqueKeysArray, // Массив столбцов
     renderTableBodyData: tableData // Стандартный массив объектов с данными для тела
 };

 return (
     <TableDataContext.Provider value={renderTableData}>
         {children}
     </TableDataContext.Provider>
 );
};

TableDataProvider.propTypes = {
    children: PropTypes.element.isRequired,
    uniqueKeysArray: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired
}

export default TableDataProvider;