// Подключаем библиотеку React, хук useState
import React, {useState, memo } from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from 'classnames';
// Подключаем валидацию входных параметров компонента
import PropTypes from 'prop-types';
// Подключаем компонент бесконечной прокрутки
import InfiniteScroll from "react-infinite-scroll-component";

// С помощью кастомного хука генерируем случайный ID
import useUniqueId from "../../config/useUniqueId.jsx";

// Подключаем эту функцию для проверки свойства объекта на вложенный объект
import { hasObjectProperty } from '../../../../../../../../helpers/object/validation/hasObjectProperty.js';
// Подключаем функцию маппинга ключей объектов дерева на русский язык
import {treeDataKeysTranslations} from "./config/treeDataKeysTranslations.js";
// Подключаем функцию проверки значения объекта на логческий тип
import {formatCheckObjectValue} from "../../../../../../../../helpers/data/formatting/formatCheckObjectValue.js";
// Подключаем иконки из библиотеки
import { Check2, Pencil, Trash3 } from 'react-bootstrap-icons';

// Подключаем стили дочернего списка
import './styles/components/_tree-child-list.less';
import './styles/generated/_tree-child-list-reset.less';
import './styles/settings/_tree-child-list-colored.less';
import './styles/elements/_tree-child-list-typography.less';

// Временно подключаем источник данных
import data from "../../../../../../../../services/data/data.json";

// Презентационный компонент вложенного узла списка исполнителей дерева
const TreeDropdownView = memo(({ dataArray }) => {
    // Состояние для чекбоксов
    const [checked, setChecked] = useState({});
    // Инициализируем количество отображаемых элементов
    const [visibleCount, setVisibleCount] = useState(4);

    // Генерация уникального ID для связывания input и label
    const relationId = useUniqueId();

    // Обработчик переключения чекбокса
    const handleCheckedInput = (id) => (e) => {
        setChecked((prev) => ({
            ...prev,
            [id]: e.target.checked,
        }));
    };

    // Функция для загрузки следующего блока элементов
    const fetchMoreData = () => {
        if (visibleCount >= data.length) return null;
        setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + 8, data.length));
        }, 500); // Делаем задержку в пол секунды для имитации асинхронной загрузки
    };
    // Сохраняем количество отображаемых элементов
    const displayedData = data.slice(0, visibleCount);

    return (
        <InfiniteScroll
            dataLength={displayedData.length}
            next={fetchMoreData}
            hasMore={visibleCount < data.length}
            loader={
                <div className={classNames('spinner')}>
                    Загрузка...
                </div>
            }
        >
            <div
                className={classNames(
                    'list-group',            // Стандартные стили списка из коробки
                    'list-group-flush',      // Без отступов
                    'tree-sublist'     // БЭМ стили вложенного списка
                )}
            >
                {Object.entries(dataArray).map(([key, item], index) => {
                    const hasNestedItemObject = hasObjectProperty(item);
                    return (
                        <div
                            key={key}
                            className={classNames(
                                'list-group-item',// Элемент списка из коробки
                                'bg-transparent',
                                'tree-sublist__item', // БЭМ стили элемента списка
                            )}
                            style={{ display: (key === 'id' || (item === null) || typeof item === 'object') ? 'none' : 'flex' }}
                            id={`${key === 'level' ? `${key}-${item}` : '' }`}
                        >
                            <div className={classNames(
                                'tree-sublist__check-input-container'
                            )}>
                                {/* Чекбокс */}
                                <input
                                    id={`${relationId}`}
                                    type="checkbox"
                                    className={classNames(
                                        'form-check-input',
                                        'tree-sublist__self-checkbox'
                                    )}
                                    checked={checked[index + 1]}
                                    onChange={handleCheckedInput(index + 1)}
                                />
                                {/* Кнопка-метка чекбокса */}
                                <label
                                    htmlFor={`${relationId}`}
                                    className={classNames(
                                        'mb-0',
                                        'btn', // стиль под кнопку
                                        'btn-sm',
                                        'btn-outline-secondary',
                                        'tree-sublist__custom-checkbox', {
                                            'is-active': checked[index + 1]
                                        }
                                    )}
                                >
                                    <div className={classNames('tree-sublist__custom-checkbox-icon')}>
                                        <Check2 />
                                    </div>
                                </label>
                            </div>
                            {/* Текст или вложенный список */}
                            <div className={classNames('text-muted', 'tree-sublist__item-text')}>
                                {hasNestedItemObject ? (
                                <span>
                                  {treeDataKeysTranslations[key]}: {formatCheckObjectValue(item)}
                                </span>
                                ) : null}
                            </div>
                            {/* Кнопки управления */}
                            <div className={classNames('btn-group', 'btn-group-sm', 'ml-auto')}>
                                <button
                                    type="button"
                                    className={classNames(
                                        'btn',
                                        'tree-list__button',
                                        'tree-list__button--delete',
                                        'tree-list__button--delete_theme-blue-100'
                                    )}
                                >
                                    <Trash3 />
                                </button>
                                <button
                                    type="button"
                                    className={classNames(
                                        'btn',
                                        'tree-list__button',
                                        'tree-list__button--update',
                                        'tree-list__button--delete_theme-blue-100'
                                    )}
                                >
                                    <Pencil />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </InfiniteScroll>
    );
});

// Типизация пропсов компонента (обязательный объект)
TreeDropdownView.propTypes = {
    dataArray: PropTypes.object.isRequired,
};

export default TreeDropdownView;