import React, { useState, useContext } from 'react';
// Импортируем компоненты React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Импорт иконок бокового меню */
import {
    Book,
    Boxes,
    Briefcase,
    Buildings,
    CardList,
    Cart3,
    MicrosoftTeams,
    QuestionSquare,
    Wrench
} from "react-bootstrap-icons";

/* Импортируем презентационный компонент вложенного списка */
import SidebarListNodeView from './SidebarListNodeView.jsx';
/* Импортируем контекст кнопки бокового меню */
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";
/* Импортируем контекст самого бокового меню */
import { DropdownListContext } from "../DropdownMenuList/DropdownMenuListSmart.jsx";
/* Создаем объект иконок с ключами (Mapping) */
const iconMapping = {
    0: <MicrosoftTeams />,
    1: <Cart3 />,
    2: <Buildings />,
    3: <Boxes />,
    4: <Briefcase />,
    5: <Book />,
    6: <CardList />,
    7: <Wrench />,
    8: <QuestionSquare />
};
/* Умный компонент выпадающего списка */
const SidebarItemContainer = () => {
    /*
        Свойство изменяющее текст кнопки и бокового меню при его растягивании
        Получаем ширину, на которую растягивается меню
     */
    const {
        canStretch,
        stretchSideMenuWidth
    } = useContext(ButtonStretchContext);
    /*
        Получаем массив элементов боковой панели
        Получаем значение индекса активного элемента
     */
    const {
        isListOpen,
        sidebarListItems,
        activeIndex,
        handleActiveClick,
        fixedMenuHeight
    } = useContext(DropdownListContext);
    // Инициализация состояния указывающее открыто ли меню
    // Состояние для установки активного пункта вложенного списка
    const [activeListItemId, setActiveListItemId] = useState(null);
    /*
        Функция устанавливающая активный пункт
        у вложенного списка и должна строго принимать id
     */
    const handleActiveClickNestedList = (id) => {
        setActiveListItemId(id);
    };

    return (
        <Router>
            <SidebarListNodeView
                // Свойство для изменения отрисовки кнопки и бокового меню
                canStretch={canStretch}
                // Ширина на которую растягивается боковое меню
                stretchSideMenuWidth={stretchSideMenuWidth}
                // Объект иконок боковой панели
                iconMapping={iconMapping}
                // Указывает, открыт ли выпадающий список
                isListOpen={isListOpen}
                // Передаем в массив элементов бокового меню
                items={sidebarListItems}
                // Индекс активного элемента боковой панели
                activeIndex={activeIndex}
                // Id активного элемента вложенного списка
                activeItemId={activeListItemId}
                // Обработка клика списка боковой панели
                handleActiveClick={handleActiveClick}
                // Обработка клика у вложенного списка
                handleActiveClickNodeList={handleActiveClickNestedList}
                // Высота боковой панели
                fixedMenuHeight={fixedMenuHeight}
            />
            <Routes>
                {/* Тут будут прописаны маршруты с помощью тега Route */}
            </Routes>
        </Router>
    );
};

export default SidebarItemContainer;