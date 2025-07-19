// Подключаем библиотеку React
import React from 'react';
// Подключаем шаблонные строки
import classNames from 'classnames';
// Подключаем библиотеку валидации параметров компонента
import PropTypes from "prop-types";

// Подключаем регулярное выражение определяющее uuid
import { uuidRegex } from './config/regEx.js';
// Подключаем объект для перевода столбцов с английского на русский
import { tableColumnsTranslation } from "./config/tableColumnsTranslation.js";

// Подключаем стили таблицы
import './styles/components/_table.less';
import './styles/generated/_table-reset.less';
import './styles/elements/_table-typography.less';
import './styles/settings/_table-theme.less';

// Подключаем иконки из библиотеки bootstrap
import { Check2 } from "react-bootstrap-icons";

// Презентационный компонент таблицы
const TableView = ({ renderTableData }) => {
    const { renderTableColumnsData, renderTableBodyData } = renderTableData;
    const renderTableColumnsFiltered = renderTableColumnsData.filter(column => column !== 'level');

    return (
        <div className={classNames('table__scroll')}>
            <table
                className={classNames(
                'table',
                    'table-striped'
                )}>
                <thead
                    className={classNames(
                    'table__header'
                    )}
                >
                    <tr className={classNames(
                        'table__row'
                    )}>
                        {renderTableColumnsFiltered.map(column => (
                            <th
                                key={column}
                                className={classNames('table__column')}
                            >
                                <div className={classNames('table__label')} style={{ maxHeight: '50px'}}>
                                    {column !== 'id'? tableColumnsTranslation[column]: ''}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={classNames('table-body')}>
                    {renderTableBodyData.map((item => (
                        <tr
                            key={item.uuid}
                            className={classNames('table__cell')}
                        >
                            <td className={classNames('table-checkbox__cell')}>
                                <input
                                    type="checkbox"
                                    className={classNames('table__checkbox-input')}
                                />
                                <label className={classNames('table__checkbox-label')}>
                                    <Check2 />
                                </label>
                            </td>
                            {Object.values(item).map((value, index) => {
                                const isUuid = typeof value === 'string' && uuidRegex.test(value);
                                return (
                                    <td key={index} className={classNames('table__item-cell')}>
                                        {(value !== undefined && !isUuid) ? value : ''}
                                    </td>
                                );
                            })}
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );
};

PropTypes.TableView = {
    renderTableData: PropTypes.object.isRequired
};

export default TableView;