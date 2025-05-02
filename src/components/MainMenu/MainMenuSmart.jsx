import React, { useState } from 'react';
import MainMenuView from "./MainMenuView.jsx";

const menuItems = [
    {id: 1, name: 'Active', href: '/', isActive: true },
    {id: 2, name: 'Приходы', href: '/' },
    {id: 3, name: 'Расходы', href: '/' },
    {id: 4, name: 'Задание', href: '/' },
    {id: 5, name: 'Остатки', href: '/' },
    {id: 6, name: 'Визуализация', href: '/' },
    {id: 7, name: 'Админ', href: '/' },
    {id: 8, name: 'Поддержка', href: '/' },
    {id: 9, name: 'Прочее', href: '/' },
    {id: 10, name: 'Персональное', href: '/' },
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