import React from 'react';
import './MainMenuStyles.css';

const MainMenuView = ({ isActive, onToggleMenu, menuItems }) => {
    return (
        <>
            <div
                className={`BurgerButton ${isActive ? 'BurgerButton_Active' : ''}`}
                onClick={onToggleMenu}
            >
                <span></span>
            </div>
            <nav className={`MainMenu ${isActive ? 'MainMenu_Active' : ''}`}>
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        className={`MainMenu-Link ${item.isActive ? 'MainMenu-Link_Active' : ''}`}
                        href={item.href}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </>
    );
}

export default MainMenuView;
