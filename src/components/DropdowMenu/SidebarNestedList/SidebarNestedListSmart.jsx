import React, { useContext } from 'react';
/* Импорт необходимых иконок */
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
/* Импортируем компонент вложенный список */
import SidebarNestedListView from './SidebarNestedListView.jsx';
/* Импорт контекста ButtonStretch */
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";
/* Импорт контекста DropdownList */
import { DropdownListContext } from "../DropdownMenuList/DropdownMenuListSmart.jsx";
/* Преобразуем набор иконок в объект с ключами (маппинг) */
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
/* Блок умного компонента */
const SidebarItemContainer = () => {
    /* Извлекаем свойство canStretch из ButtonStretchContext */
    const { canStretch } = useContext(ButtonStretchContext);
    /* Аналогично извлекаем свойства из DropdownListContext */
    const { dropdownListItems, activeIndex, handleActiveClick } = useContext(DropdownListContext);

    return (
        <SidebarNestedListView
            canStretch={canStretch}
            iconMapping={iconMapping}
            items={dropdownListItems}
            activeIndex={activeIndex}
            handleActiveClick={handleActiveClick}
        />
    );
};

export default SidebarItemContainer;