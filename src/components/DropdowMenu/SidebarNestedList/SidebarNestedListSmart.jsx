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

/* Импортируем библиотеку classNames */
import classNames from "classnames";
/* Импортируем компонент вложенный список */
import SidebarNestedListView from './SidebarNestedListView.jsx';
/* Импорт контекста ButtonStretch */
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";
/* Импорт контекста DropdownList */
import { DropdownListContext } from "../DropdownMenuList/DropdownMenuListSmart.jsx";
const classes = classNames(
    'SidebarIconFontSize'
);
/* Преобразуем набор иконок в объект с ключами (маппинг) */
const iconMapping = {
    0: <MicrosoftTeams className={classes} />,
    1: <Cart3 className={classes} />,
    2: <Buildings className={classes} />,
    3: <Boxes className={classes} />,
    4: <Briefcase className={classes} />,
    5: <Book className={classes} />,
    6: <CardList className={classes} />,
    7: <Wrench className={classes} />,
    8: <QuestionSquare className={classes} />
};
/* Блок умного компонента */
const SidebarItemContainer = () => {
    /* Извлекаем свойство canStretch из ButtonStretchContext */
    const { canStretch } = useContext(ButtonStretchContext);
    /* Аналогично извлекаем свойства из DropdownListContext */
    const { dropdownListItems, activeIndex, handleActiveClick, fixedMenuHeight } = useContext(DropdownListContext);

    return (
        <SidebarNestedListView
            canStretch={canStretch}
            iconMapping={iconMapping}
            items={dropdownListItems}
            activeIndex={activeIndex}
            handleActiveClick={handleActiveClick}
            fixedMenuHeight={fixedMenuHeight}
        />
    );
};

export default SidebarItemContainer;