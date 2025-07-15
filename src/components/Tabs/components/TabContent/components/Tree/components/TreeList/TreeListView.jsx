// Подключаем библиотеку React, хуки useState, memo, Suspense, lazy
import React, { useState, memo, Suspense, lazy } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";
// Подключаем валидацию входных параметров
import PropTypes from 'prop-types';
// Подключаем кастомный хук для генерации случайных ID
import useUniqueId from "../../config/useUniqueId.jsx";
// Подключаем вложенный список используя механизм ленивой загрузки
const TreeDropdownView = (lazy(() => import("../TreeDropdown/TreeDropdownView.jsx")));
// Подключаем иконки из библиотеки
import { Check2, ChevronRight, ChevronDown, Plus } from "react-bootstrap-icons";

// Подключаем обработчик управления состоянием открытия / закрытия вложенного списка
import createToggleLevelListHandler from "../../config/createToggleLevelListHandler.jsx";

// Подключаем общие стили дерева
import './styles/components/_tree-list.less';
import './styles/settings/_tree-list-theme.less';
import './styles/generated/_tree-list-reset.less';
import './styles/typography/_tree-list-typography.less';

// Презентационный компонент основного списка дерева
const TreeListView = memo(({ production }) => {
    // Инициализация состояния отображения уровня
    const [toggleChecked, setToggleChecked] = useState(true);
    // Генерация уникального ID для элементов формы
    const relativeId = useUniqueId();
    // Обработчик переключения уровня списка (раскрытие/сжатие)
    const toggleLevelList = createToggleLevelListHandler(setToggleChecked);

    return (
        <div className={classNames('list-group', 'list-group-flush', 'tree-list')}>
            {Object.keys(production).map((key) =>
                production[key].map((item, index) => (
                    <div
                        key={`${key}-${item.id || index}`} // уникальный ключ
                        className={classNames('list-group-item', 'tree-list__item')}
                    >
                        <div className={classNames('row')}>
                            {/* Иконка для раскрытия/сжатия */}
                            <div className={classNames(
                                'col-2',
                                    'tree-list__item-column',
                                    'tree-list__item-column--left'
                                )}
                            >
                                <div
                                    className={classNames(
                                        'btn',
                                        'btn-light',
                                        'rounded-circle',
                                        'tree-list__dropdown-button'
                                    )}
                                    onClick={toggleLevelList}
                                >
                                    <div
                                        className={classNames(
                                        'tree-list__dropdown-button-text'
                                        )}
                                    >
                                        {toggleChecked ? <ChevronRight /> : <ChevronDown />}
                                    </div>
                                </div>
                                {/* Чекбокс */}
                                <input
                                    id={`${relativeId}`}
                                    type="checkbox"
                                    className={classNames('form-check-input', 'tree-list__self-checkbox')}
                                />
                                <label
                                    htmlFor={`${relativeId}`}
                                    className={classNames(
                                        'mb-0',
                                        'btn',
                                        'btn-outline-secondary',
                                        'tree-list__custom-checkbox'
                                    )}
                                >
                                    <div className={classNames('tree-list__custom-checkbox-icon')}>
                                        <Check2 />
                                    </div>

                                </label>
                            </div>
                            {/* Отображение уровня вложенности */}
                            <div className={classNames(
                                'col-10',
                                'tree-list__item-column',
                                'tree-list__item-column--right'
                            )}>
                                <div className={classNames(
                                    'alert',
                                    'alert-light',
                                    'tree-list__item-title'
                                )}>
                                    Раздел {item.id}
                                </div>
                            </div>
                        </div>

                        {/* Рендеринг вложенного списка */}
                        {toggleChecked && (
                            <Suspense fallback={<div>Загрузка...</div>}>
                                <TreeDropdownView dataArray={item} />
                            </Suspense>
                        )}
                        {/* Рендерим кнопку добавления в конце каждого списка */}
                        {index === production[key].length - 1 && (
                            <button
                                type="button"
                                className={classNames(
                                    'btn',
                                    'btn-outline-info',
                                    'tree-list__button',
                                    'tree-list__button--added',
                                )}
                            >
                                <Plus />
                            </button>
                        )}
                    </div>
                ))
            )}
        </div>
    );
});

// Проверка входных параметров компонента
TreeListView.propTypes = {
    production: PropTypes.object.isRequired,
};

export default TreeListView;