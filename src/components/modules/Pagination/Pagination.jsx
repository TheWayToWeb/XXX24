// Подключаем библиотеку React
import React, { memo } from 'react';
// Подключаем библиотеку валидации параметров компонента
import PropTypes from "prop-types";
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';

// Подключаем умный компонент таблицы
import { Table } from "./components/Table/index.js";

// Подключаем стили пагинации
import './styles/components/_pagination.less';
import './styles/generated/_pagination-reset.less';

// Презентационный компонент таблицы с постраничным отображением
const Pagination = memo(({ currentPage, totalPages, handlePageChange }) => {
    return (
        <>
            <Table />
            <div className={classNames('pagination__outDiv')}>
                <nav className={classNames('Page navigation')}>
                    <div className={classNames('pagination')}>
                        <div className={classNames(
                            'button-group',
                                'button-group-sm',
                                'pagination__button-container'
                        )}>
                            {Array.from({length: totalPages}, (_, index) => (
                                <button
                                    className={classNames(
                                        'btn',
                                        'pagination__button', {
                                            'btn-info': index + 1 !== currentPage,
                                            'btn-outline-info': index + 1 === currentPage
                                        }
                                    )}
                                    key={ index + 1 }
                                    onClick={() => handlePageChange(index + 1)}
                                    disabled={index + 1 === currentPage}
                                >
                                    { index + 1 }
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
});

PropTypes.Pagination = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired
};

export default Pagination;