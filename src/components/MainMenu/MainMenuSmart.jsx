import React, { useState } from 'react';
import MainMenuView from "./MainMenuView.jsx";

const menuItems = [
    {id: 1, name: 'Приходы', href: '/', isActive: true },
    {id: 2, name: 'Расходы', href: '/' },
    {id: 3, name: 'Задание', href: '/' },
    {id: 4, name: 'Остатки', href: '/' },
    {id: 5, name: 'Визуализация', href: '/' },
    {id: 6, name: 'Админ', href: '/' },
    {id: 7, name: 'Поддержка', href: '/' },
    {id: 8, name: 'Прочее', href: '/' },
    {id: 9, name: 'Персональное', href: '/' }
];

const MainMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    return (
        <MainMenuView
            isActive={isActive}
            onToggleMenu={toggleMenu}
            menuItems={menuItems}
        />
    );
};

export default MainMenu;