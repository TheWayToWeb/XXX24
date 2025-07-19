// Подключаем библиотеку React, хуки useState, useContext, useCallback, memo
import React, { useState, useContext, useCallback, memo } from 'react';
// Подключаем контекст родительского элемента навигационного меню
import { ToggleButtonStretchContext } from "../../context/toggleButtonStretchContext.js";
// Подключаем контекст навигационного списка
import { VerticalNavbarContext } from "../VerticalNavbar/context/verticalNavbarContext.js";
// Подключаем шаблонные строки classNames
import classNames from "classnames";
// Подключаем контейнер Bootstrap
import { BootstrapGrid } from "../../../../../shared/BootstrapGrid/index.js";
// Подключаем компонент вложенного списка
import { ChildNavbarList } from "../ChildNavbarList/index.js";
// Для кнопки удаления элемента добавляем галочки из react-bootstrap
import { Check2 } from 'react-bootstrap-icons';
// Подключаем стили списка навигационного меню
import './styles/components/_navbar-list.less';
import './styles/elements/_navbar-list-typography.less';
import './styles/generic/_navbar-list-reset.less';
import './styles/settings/_navbar-list-theme.less';
// Подключаем prop-type
import PropTypes from "prop-types";
// Блок презентационного компонента выпадающего списка
const NavbarListView = memo(({
        iconMapping, // Массив иконок бокового меню
        initFilterItems, // Фильтрованный массив элементов бокового меню
        removeListItem, // Функция для удаления элемента навигационного меню
 }) => {
    const { isStretched } = useContext(ToggleButtonStretchContext);
    const { listItemActiveIndex, handleListItemActiveIndex } = useContext(VerticalNavbarContext);
    const [filterItems, setFilterItems] = useState(initFilterItems);
    // Внутренние состояния для управления Drag & Drop UI
    const [draggingItemId, setDraggingItemId] = useState(null);
    const [dragOverItemId, setDragOverItemId] = useState(null);
    const [dropPosition, setDropPosition] = useState(null); // 'before' or 'after'

    // Обработчик начала перетаскивания
    const handleDragStart = useCallback((e, itemId) => {
        setDraggingItemId(itemId);
        // Дополнительно можно добавить данные в dataTransfer, но для перетаскивания внутри одного списка это не всегда обязательно
        // e.dataTransfer.setData('text/plain', itemId);
        e.dataTransfer.effectAllowed = 'move';
    }, []);

    // Обработчик перетаскивания над элементом
    const handleDragOver = useCallback((e, targetItemId) => {
        e.preventDefault(); // Обязательно, чтобы разрешить drop
        if (draggingItemId === targetItemId) {
            return; // Не перетаскивать над самим собой
        }

        const targetRect = e.currentTarget.getBoundingClientRect();
        const middleY = targetRect.top + targetRect.height / 2;
        const newDropPosition = e.clientY < middleY ? 'before' : 'after';

        setDragOverItemId(targetItemId);
        setDropPosition(newDropPosition);
    }, [draggingItemId]);
    // Обработчик ухода курсора с элемента
    const handleDragLeave = useCallback(() => {
        setDragOverItemId(null);
        setDropPosition(null);
    }, []);

    // Обработчик отпускания элемента
    const handleDrop = useCallback((e, targetItemId) => {
        e.preventDefault();

        if (!draggingItemId || !targetItemId || draggingItemId === targetItemId) {
            return;
        }

        const draggedItem = filterItems.find(item => item.id === draggingItemId);
        if (!draggedItem) return;

        // Создаем новый массив без перетаскиваемого элемента
        const updatedItems = filterItems.filter(item => item.id !== draggingItemId);

        // Находим индекс, куда нужно вставить элемент
        let insertIndex = updatedItems.findIndex(item => item.id === targetItemId);

        if (insertIndex === -1) { // Если targetItemId не найден (что не должно произойти, но для безопасности)
            setDraggingItemId(null);
            setDragOverItemId(null);
            setDropPosition(null);
            return;
        }

        // Корректируем индекс вставки в зависимости от dropPosition
        if (dropPosition === 'after') {
            insertIndex++;
        }

        // Вставляем перетаскиваемый элемент в новую позицию
        updatedItems.splice(insertIndex, 0, draggedItem);

        // Обновляем состояние
        setFilterItems(updatedItems);

        // Сбрасываем состояние перетаскивания
        setDraggingItemId(null);
        setDragOverItemId(null);
        setDropPosition(null);
    }, [draggingItemId, dropPosition, filterItems]);

    // Обработчик окончания перетаскивания (сброс состояния)
    const handleDragEnd = useCallback(() => {
        setDraggingItemId(null);
        setDragOverItemId(null);
        setDropPosition(null);
    }, []);

    return (
        <div className="list-group NavbarList">
            {filterItems.map((item, index) => (
                <span
                    key={item.id}
                    className={classNames(
                    'list-group-item',
                        'NavbarList-Link', {
                        'NavbarList-Link_active': listItemActiveIndex === item.id,
                        'is-dragging': draggingItemId === item.id,
                        'drag-over-before': dragOverItemId === item.id && dropPosition === 'before',
                        'drag-over-after': dragOverItemId === item.id && dropPosition === 'after',
                        }
                    )}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, item.id)}
                    onDragOver={(e) => handleDragOver(e, item.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, item.id)}
                    onDragEnd={handleDragEnd}
                    onClick={() => handleListItemActiveIndex(item)}
                >
                    <BootstrapGrid>
                        <div className={classNames(
                            'col-sm-12',
                            'col-md-6',
                            'NavbarList-LinkContent'
                        )}>
                            <span
                                className={classNames(
                                    'NavbarList-Icon'
                                )}
                            >
                                {iconMapping[index]}
                            </span>
                            {isStretched && (
                                <span
                                    className={classNames('' +
                                        'NavbarList-IconText')}
                                >
                                    {item.text}
                                </span>
                            )}
                        </div>
                        {isStretched && (
                            <div className={classNames(
                                'col-sm-12',
                                'col-md-6',
                                'NavbarList-ButtonContainer'
                            )}>
                              <span
                                  className={classNames(
                                  'NavbarList-Button',
                                      'NavbarList-Button_delete'
                                  )}
                                  onClick={(e) => {
                                      e.stopPropagation();
                                      removeListItem(item.id);
                                  }}
                              >
                                <Check2 />
                              </span>
                            </div>
                        )}
                    </BootstrapGrid>
                    <ChildNavbarList
                        childItem={item}
                    />
                </span>
            ))}
        </div>
    );
});

NavbarListView.PropTypes = {
    iconMapping: PropTypes.object.isRequired,
    filterItems: PropTypes.array.isRequired,
    removeListItem: PropTypes.func.isRequired,
    addItemToList: PropTypes.func.isRequired,
}

export default NavbarListView;