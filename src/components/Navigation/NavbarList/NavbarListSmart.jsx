// Подключаем компонент React, хуки useState, useEffect
import React, { useState, useContext } from 'react';
// Подключаем иконки dataIcons
import { dataIcons } from "./icons.jsx";
// Подключаем презентационный компонент вложенного списка
import SidebarListNodeView from './NavbarListView.jsx';
// Подключаем контекст вертикального списка навигационного меню
import { VerticalNavbarContext } from "../VerticalNavbar/verticalNavbarContext.js";
// Подключаем провайдер для контекста основного списка
import NavbarListProvider from "./NavbarListProvider.jsx";
// Подключаем объект контекста основного списка
import { useNavbarListContext } from "./navbarListContext.js";
// Блок умного компонента SubMenuItems
const NavbarListSmart = () => {
    const { listItems, listHeight } = useContext(VerticalNavbarContext);
    // Инициализируем состояние, чтобы фильтровать массив
    const [filterItems, setFilterItems] = useState(listItems);
    // Инициализация состояния для установки активного элемента у вложенного списка
    const [activeChildItemId, setActiveChildItemId] = useState(null);
    // Инициализация начального состояния добавляемого элемента
    const [nextItemId, setNextItemId] = useState(
        Math.max(...filterItems.map(item => item.id)) + 1
    );
    // Функция для установки активного элемента вложенному списку по id
    const handleActiveClickChildList = (id) => {
        setActiveChildItemId(id);
    };

    // Функция удаления элемента массива бокового меню по id
    const removeListItem = (itemId) => {
        setFilterItems(prev => prev.filter(item => item.id !== itemId));
    };
    // Функция удаления элемента массива вложенного списка
    const removeChildListItem = (childId) => {
        setFilterItems(prevItems =>
            prevItems.map(item => {
                // Проверяем не пуст ли родительский элемент
                // чей массив children нужно изменить
                if (item.children.length > 0) {
                    // Возвращаем новый объект item, скопировав все его свойства
                    // и обновляем вложенный массив children
                    return {
                        ...item,
                        children: item.children.filter(child => child.id !== childId)
                    };
                }
                // Если у item вложенный массив children отсутствует
                // возвращаем его без изменений
                return item;
            })
        );
    };
    // Функция добавления нового элемента в массив бокового меню
    const addItemToList = () => {
        const newItem = {
            id: nextItemId,
            text: `Item ${nextItemId}`,
            path: `/item_${nextItemId}`,
            children: []
        };
        setFilterItems([...filterItems, newItem]);
        setNextItemId(nextItemId + 1);
    };

    const navbarListContext = useNavbarListContext(
        activeChildItemId,
        handleActiveClickChildList,
        removeChildListItem
    );

    return (
        <NavbarListProvider value={navbarListContext}>
            <SidebarListNodeView
                // Иконки боковой панели
                iconMapping={dataIcons}
                // Фильтруемый массив для удаления элементов
                initFilterItems={filterItems}
                // Удаляем элемент навигационного списка
                removeListItem={removeListItem}
                // Добавляем элемент в список
                addItemToList={addItemToList}
            />
        </NavbarListProvider>

    );
};

export default NavbarListSmart;