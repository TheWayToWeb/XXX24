import React from 'react';
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
    return (
        <nav className="nav MainMenu">
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
    );
};

export default MainMenuView;
