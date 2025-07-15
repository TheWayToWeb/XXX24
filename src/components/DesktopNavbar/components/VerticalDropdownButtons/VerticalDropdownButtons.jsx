// Подключаем библиотеку React и хук кэширования memo
// входных параметров компонента
import React, { memo } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';
// Подключаем библиотеку валидации параметров
import PropTypes from "prop-types";

// Подключаем массив иконок для отображения
import { navIconsConfig } from "./config/navIconsConfig.jsx";

// Подключаем необходимые иконки из библиотеки boostrap
import { ChevronRight, Fullscreen } from "react-bootstrap-icons";

// Подключаем компонент обертку модального окна
import { Dialog } from "./Dialog/index.js";
// Подключаем форму добавления нового исполнителя
import { ExecutorForm } from "./Dialog/components/ExecutorForm/index.js";
// Подключаем форму добавления заказа
import { OrderForm } from "./Dialog/components/OrderForm/index.js";
// Подключаем форму добавления оборудования
import { EquipmentForm } from "./Dialog/components/EquipmentForm/index.js";
// Подключаем форму добавления материала
import { AssortmentForm } from "./Dialog/components/AssortmentForm/index.js";
// Подключаем форму добавления клиента
import { ClientsForm } from "./Dialog/components/ClientsForm/index.js";

// Презентационный компонент вертикального выпадающего списка с кнопками
// верхней навигационной панели
const VerticalDropdownButtons = memo(({
                                 dataToggle, // Управление состоянием открытия / закрытия списка
                                 activeOverlayId, // Идентификатор отображаемого окна
                                 currentPathName, // Маршрут рабочего стола на котором находится пользователь
                                 isProduction, // Функция, определяющая, находимся ли мы в секторе производства
                                 isStore, // Функция, определяющая, находимся ли мы в секторе склада
                                 isHiddenDesktopProduction, // Функция скрывающая функционал производства от других столов
                                 isHiddenDesktopStore, // Функция скрывающая функционал склада от других столов
                                 handleDropdownButtonsToggle, // Обработчик управляющий открытием / закрытием выпадающего списка
                                 handleOverlayOpen, // Обработчик позволяющий открыть окно
                                 handleOverlayClose // Обработчик позволяющий закрыть окно
}) => {
    return (
        <div className={classNames('drop-end__component')}>
            <div
                className={classNames(
                    'btn',
                    'btn-light',
                    'drop-end', {
                        'drop-end--focused': dataToggle
                    }
                )}
                onClick={handleDropdownButtonsToggle}
            >
                <ChevronRight />
            </div>
            {dataToggle && (
                <div className={classNames(
                    'btn-group-vertical',
                    'dropdown-vertical'
                )}>
                    {navIconsConfig.map(item => (
                        <div
                            className={classNames('dropdown-vertical__button-container')}
                            key={item.key}
                        >
                            {isProduction(currentPathName) && (
                                <button
                                    className={classNames(
                                        'btn',
                                        'btn-light',
                                        'nav-panel__button',
                                        'dropdown-vertical__button'
                                    )}
                                    onClick={() => handleOverlayOpen(item)}
                                    style={{ display: isHiddenDesktopStore(item.type) ? 'none': 'block' }}
                                >
                                    {item.icon}
                                </button>
                            )}
                            {isStore(currentPathName) && (
                                <button
                                    className={classNames(
                                        'btn',
                                        'btn-light',
                                        'nav-panel__button',
                                        'dropdown-vertical__button'
                                    )}
                                    onClick={() => handleOverlayOpen(item)}
                                    style={{ display: isHiddenDesktopProduction(item.type) ? 'none': 'block' }}
                                >
                                    {item.icon}
                                </button>
                            )}
                            <div className="wrapper-dropdown-item">
                                <div className={classNames('overlay__component', {
                                    'd-block': activeOverlayId === item.id
                                })}>
                                    {activeOverlayId === item.id && (
                                        <Dialog
                                            activeOverlayId={activeOverlayId}
                                            handleOverlayClose={handleOverlayClose}
                                        >
                                            {isProduction(currentPathName) && (
                                                <>
                                                    {item.id === 2 && <OrderForm />}
                                                    {item.id === 3 && <ExecutorForm />}
                                                    {item.id === 6 && <EquipmentForm />}
                                                </>
                                            )}
                                            {isStore(currentPathName) && (
                                                <>
                                                    {item.id === 4 && <ClientsForm />}
                                                    {item.id === 5 && <AssortmentForm />}
                                                </>
                                            )}
                                        </Dialog>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className={classNames(
                        'btn',
                        'btn-light',
                        'nav-panel__button'
                    )}>
                        <Fullscreen />
                    </button>
                </div>
            )}
        </div>
    );
});

PropTypes.VerticalDropdownButtons = {
    dataToggle: PropTypes.bool.isRequired, // Управление открытием / закрытием списка
    activeOverlayId: PropTypes.number.isRequired, // Идентификатор отображаемого окна
    currentPathName: PropTypes.string.isRequired, // Маршрут рабочего стола
    isProduction: PropTypes.func.isRequired, // Функция, определяющая, находимся ли мы в секторе производство
    isStore: PropTypes.func.isRequired, // Функция, определяющая, находимся ли мы в секторе склад
    isHiddenDesktopProduction: PropTypes.func.isRequired, // Функция скрывающая иконки производства от других секторов
    isHiddenDesktopStore: PropTypes.func.isRequired, // Функция скрывающая иконки склада от других секторов
    handleDropdownButtonsToggle: PropTypes.func.isRequired, // Обработчик управления открытием / закрытием выпадающего списка
    handleOverlayOpen: PropTypes.func.isRequired, // Обработчик позволяющий открыть окно
    handleOverlayClose: PropTypes.func.isRequired // Обработчик позволяющий закрыть окно
};

export default VerticalDropdownButtons;