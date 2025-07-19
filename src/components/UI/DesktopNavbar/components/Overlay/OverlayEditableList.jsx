// Подключаем библиотеку React и хук useState
import React, { useState } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Подключаем хук useMediaQuery
import { useMediaQuery } from "react-responsive";

// Подключаем хук определения текущего маршрута
import { useLocation } from "react-router-dom";
// Подключаем кастомный хук для получения объединенного контекста
import { useCombineContext } from "../../../../../hooks/data/useCombineContext.js";

// Подключаем функцию идентификации сектора производство
import { isProduction } from "../../../../../helpers/data/validation/Production/isProduction.js";
// Подключаем функцию идентификации сектора склада
import { isStore } from "../../../../../helpers/data/validation/Store/isStore.js";

// Подключаем функцию преобразование контекста в массив ключей
import { getUniqueKeysFromObjectData } from "../../../../../helpers/object/services/getUniqueKeysfromObjectData.js";

// Подключаем объект маппинга элементов списка производства
import { editableListItemMappingProduction as mappingProduction } from "./config/Production/editableListItemMappingProduction.js";
// Подключаем объект маппинга элементов списка склад
import { editableListItemMappingStore as mappingStore } from "./config/Store/editableListItemMappingProduction.js";

// Подключаем иконки из библиотеки bootstrap
import { Gear, Check2 } from "react-bootstrap-icons";

// Подключаем стили всплывающего окна списка управления параметрами таблицы
import './styles/component/_overlay-editable-list.less';
import './styles/generated/_overlay-editable-reset.less';
import './styles/element/_overlay-editable-typography.less';

// Подключаем стили для кнопки управления состоянием открытия / закрытия окна
import './styles/settings/overlay-button-toggle/overlay-button-toggle-white/_overlay-button-toggle-white-theme.less';
//import './styles/settings/overlay-button-toggle/overlay-button-toggle-gray/_overlay-button-toggle-gray.less';
//import './styles/settings/overlay-button-toggle/overlay-button-toggle-system/_overlay-button-toggle-system-theme.less';

// Подключаем стили для самого всплывающего окна управления таблицей
import './styles/settings/overlay-window/overlay-theme-white/_overlay-theme-whte.less';
//import './styles/settings/overlay-theme-gray/_overlay-overlay-theme-gray.less';
//import './styles/settings/overlay-theme-system/_overlay-overlay-theme-system.less';

// Презентационный компонент
const OverlayEditableList = () => {
    // Получаем объединенный контекст
    const appCombineContext = useCombineContext();
    // Получаем текущий объект маршрута
    const location = useLocation();
    // Получаем текущий маршрут
    const pathName = location.pathname.slice(1);
    // Инициализируем контейнер для отображаемого контекста
    let displayContext;
    // Если находимся в секторе производство
    if (isProduction(pathName)) {
        // Получаем контекст производства из объединенного контекста
        const { production } = appCombineContext;
        // Инициализируем отображаемый контекст объектом производства
        displayContext = production;
    }
    // Если находимся в секторе склада
    if (isStore(pathName)) {
        // Получаем контекст склада из объединенного контекста
        const { store } = appCombineContext;
        // Инициализируем отображаемый контекст объектом склада
        displayContext = store;
    }
    const displayContextKeysList = Array.from(getUniqueKeysFromObjectData(displayContext));

    // Состояние видимости модбного окна со списком
    const [visibleOverlay, setVisibleOverlay] = useState(false);

    // Функция отображения модального окна
    const handleVisibleOverlay = () => {
        setVisibleOverlay(true);
    };
    // Функция сокрытия модального окна
    const handleHiddenOverlay = () => {
        setVisibleOverlay(false);
    };

    // Выполняем проверку ширины экрана
    const isPhoneScreen = useMediaQuery({ query: '(max-width: 991px)' });

    // Инициализируем состояние клика кнопки отображения / сокрытия окна со списком
    const [buttonToggle, setButtonToggle] = useState(false);

    // Обработки устанавливающий фокус для кнопки
    const handleButtonToggle = () => {
        setButtonToggle(prevState => (!prevState));
    };

    return (
        <>
            <button
                className={classNames(
                    'btn',
                    'btn-light',
                    'modal-button-toggle', {
                        // Если экран моббильного телефона и был клик
                        'modal-button-toggle--focused': isPhoneScreen && buttonToggle
                    }
                )}
                onClick={() => {
                    handleVisibleOverlay();
                    if (isPhoneScreen) {
                        handleButtonToggle();
                    }
                }}
            >
                <Gear />
            </button>
            <div
                className={classNames(
                    'modal',
                    'overlay-editable'
                )}
                style={{ display: visibleOverlay ? "block" : "none" }}
            >
                <div className={classNames(
                    'modal-dialog',
                    'modal-xl',
                    'overlay-editable__dialog'
                )}>
                    <div className={classNames(
                        'modal-content',
                        'overlay-editable__content'
                    )}>

                            <div className={classNames('columns-grid')}>
                                <div
                                    className={classNames(
                                        'columns-grid__column',
                                        'columns-grid__column--1'
                                    )}
                                >
                                    <li
                                        className={classNames(
                                            'list-group-item',
                                            'overlay-editable-list__item',
                                            'overlay-editable-list--column'
                                        )}
                                    >
                                        <div
                                            className={classNames(
                                                'form-check',
                                                'column-list'
                                            )}
                                        >
                                            <div className={classNames('column-list__checkbox-wrapper')}>
                                                <input
                                                    type="checkbox"
                                                    className={classNames('column-list__checkbox-input')}
                                                />
                                                <label className={classNames('column-list__checkbox-label')}>
                                                    <Check2 />
                                                </label>
                                                <span
                                                    className={classNames(
                                                        'column-list__checkbox-text'
                                                    )}
                                                >
                                                    Столбец
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div
                                    className={classNames(
                                        'columns-grid__column',
                                        'columns-grid__column--2'
                                    )}
                                >
                                    <li
                                        className={classNames(
                                            'list-group-item',
                                            'overlay-editable-list__item',
                                            'overlay-editable-list--column'
                                        )}
                                    >
                                        <div
                                            className={classNames(
                                                'form-check',
                                                'column-list'
                                            )}
                                        >
                                            <div className={classNames('column-list__checkbox-wrapper')}>
                                                <input
                                                    type="checkbox"
                                                    className={classNames('column-list__checkbox-input')}
                                                />
                                                <label className={classNames('column-list__checkbox-label')}>
                                                    <Check2 />
                                                </label>
                                                <span className={classNames('column-list__checkbox-text')}
                                                >
                                                    Добавить столбец
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div
                                    className={classNames(
                                        'columns-grid__column',
                                        'columns-grid__column--3'
                                    )}
                                >
                                    <li className={classNames(
                                        'list-group-item',
                                        'overlay-editable-list__item',
                                        'overlay-editable-list--column'
                                    )}
                                    >
                                        <div
                                            className={classNames(
                                                'form-check',
                                                'column-list'
                                            )}
                                        >
                                            <div className={classNames('column-list__checkbox-wrapper')}>
                                                <input
                                                    type="checkbox"
                                                    className={classNames('column-list__checkbox-input')}
                                                />
                                                <label className={classNames('column-list__checkbox-label')}>
                                                    <Check2 />
                                                </label>
                                                <span
                                                    className={classNames(
                                                        'column-list__checkbox-text'
                                                    )}
                                                >
                                                    Зафиксировать
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </div>

                            </div>

                        <div className={classNames('modal-body', 'overlay-editable__body')}>
                            <ul className={classNames(
                                'list-group',
                                'list-group-flush',
                                'overlay-editable-list',
                                'overlay-editable-list__wrapper',
                                'overlay-editable-list--editable'
                            )}>
                                {displayContextKeysList.map(item => (
                                    <li
                                        className={classNames(
                                            'list-group-item',
                                            'overlay-editable-list__item'
                                        )}
                                        style={{ display: (item === 'id' || item === 'level') ? 'none' : 'block' }}
                                    >
                                        <div className={classNames(
                                            'form-check',
                                            'overlay-editable-list__form-check'
                                        )}>
                                            <div className={classNames('check-group')}>
                                                <input
                                                    type="checkbox"
                                                    className={classNames(
                                                        'form-check-input',
                                                        'overlay-editable-list__check-input'
                                                    )}
                                                />
                                                <label className={classNames(
                                                    'form-check-label',
                                                    'overlay-editable-list__check-label'
                                                )}>
                                                    <Check2 />
                                                </label>
                                            </div>
                                            <div className={classNames('check-group')}>
                                                <input
                                                    type="checkbox"
                                                    className={classNames(
                                                        'form-check-input',
                                                        'overlay-editable-list__check-input'
                                                    )}
                                                />
                                                <label
                                                    className={classNames(
                                                        'form-check-label',
                                                        'overlay-editable-list__check-label'
                                                    )}
                                                >
                                                    <Check2 />
                                                </label>
                                            </div>
                                            <span className={classNames(
                                                'form-check-text'
                                            )}>
                                                {isProduction(pathName) && (mappingProduction[item])}
                                                {isStore(pathName) && (mappingStore[item])}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={classNames('modal-footer', 'overlay-editable__footer')}>
                            <button
                                type="button"
                                className={classNames(
                                    'btn',
                                    'btn-light',
                                    'overlay-editable__button-close'
                                )}
                                onClick={handleHiddenOverlay}
                            >
                                Закрыть окно
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverlayEditableList;