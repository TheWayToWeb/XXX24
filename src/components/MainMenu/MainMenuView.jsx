import React, { useState } from 'react';
import './MainMenuStyles.css';

const menuItems = [
    { name: 'Active', href: '/', isActive: true },
    { name: 'Приходы', href: '/' },
    { name: 'Расходы', href: '/' },
    { name: 'Задание', href: '/' },
    { name: 'Остатки', href: '/' },
    { name: 'Визуализация', href: '/' },
    { name: 'Админ', href: '/' },
    { name: 'Поддержка', href: '/' },
    { name: 'Прочее', href: '/' },
    { name: 'Персональное', href: '/' },
];

const MainMenuView = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div
                className={`BurgerButton ${isActive ? 'BurgerButton_Active' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
            </div>
            <nav className={`nav MainMenu ${isActive ? 'MainMenu_Active' : ''}`}>
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        className={`nav-link MainMenu-Link ${item.isActive ? 'MainMenu-Link_Active' : ''}`}
                        href={item.href}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </>
    );
};

export default MainMenuView;
