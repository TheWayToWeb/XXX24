// Подключаем библиотеку React, хук useMemo
import React, { useState, memo } from "react";
// Подключаем библиотеку валидации параметров
import PropTypes from "prop-types";
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Подключаем основные стили фильтра поиска
import './styles/component/_filter-search.less';
import './styles/elements/_filter-typography.less';
import './styles/generated/_filter-reset.less';

// Подключаем стили смены темы фильтра поиска
import './styles/settings/filter-search/filter-search-white/_filter-search-white-theme.less';
//import './styles/settings/filter-search/filter-search-gray/_filter-search-gray-theme.less';
//import './styles/settings/filter-search/filter-search-system/_filter-search-system.less';

// Подключаем стили списка результатов фильтра
import './styles/settings/filter-result-list/_filter-result-list-white-theme.less';
//import './styles/settings/filter-result-list/_filter-result-list-gray-theme.less';
//import './styles/settings/filter-result-list/_filter-result-list-system-theme.less';

// Компонент фильтра поиска
const SearchFilterView = memo(({ textFilter, isOpen, handleInputSearchClick }) => {
    // Сохраняем данные формы поиска для отображения
    const filterData = textFilter[0];
    // Состояние активного элемента выпадающего списка фильтра
    const [activeItemId, setActiveItemId] = useState(null);

    return (
        <div className={classNames('filter-search__component')}>
            <input
                type="text"
                id={filterData.id}
                placeholder={filterData.text}
                className={classNames('form-control filter-search')}
                onClick={handleInputSearchClick}
            />
            {isOpen && (
                <ul className={classNames(
                    'list-group',
                    'list-group-flush',
                    'filter-search__result-list',
                    'filter-result-list'
                )}>
                    {textFilter.map((item, index) => (
                        <li
                            className={classNames(
                                'list-group-item',
                                'filter-result__item',
                                'filter-search__list-item', {
                                'list-group-item--active': (item.id === activeItemId),
                                'd-none': (index === 0)
                            })}
                            onClick={() => setActiveItemId(item.id)}
                        >
                            <span className={classNames(
                                'filter-search__list-item-text',
                                    'filter-result__text'
                                )}
                            >
                                {item.text}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );
});

PropTypes.SearchFilterView = {
    textFilter: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleInputSearchClick: PropTypes.func.isRequired,
};

export default SearchFilterView;
